import * as path from 'path';
// @ts-ignore
import express, {Request, Response, Router} from 'express';

import axios from 'axios';
import {Order} from '../client/src/app/models/order';
import {Address} from '../client/src/app/models/address';
import {Contact} from '../client/src/app/models/contact';
import {OrderAmountDetail} from '../client/src/app/models/order-amount-detail';
import {Transaction} from '../client/src/app/models/transaction';
import {OrderLineItem} from '../client/src/app/models/order-line-item';
import {SubscriptionDetail} from '../client/src/app/models/subscription-detail';
import {preparePgResponse} from "./pg-response";
import {PgResponseData} from "../client/src/app/models/PgResponseData";
import { createSignedResponse, validateRequest } from './util';
import {url} from "inspector";

// PSL service api's
const ORDER_API = process.env.ORDER_API ? process.env.ORDER_API : 'https://epms-dev.ets.org/data/orders';
const TRANSACTION_API = process.env.TRANSACTION_API ? process.env.TRANSACTION_API : 'https://epms-dev.ets.org/data/transactions/';
const TOKEN_API = process.env.TOKEN_API ? process.env.TOKEN_API : 'https://epms-dev.ets.org/token/transactions/';
const PAYMENT_API = process.env.PAYMENT_API ? process.env.PAYMENT_API : 'https://epms-dev.ets.org/payment/transactions/';
const SUBSCRIPTION_API = process.env.SUBSCRIPTION_API ? process.env.SUBSCRIPTION_API : 'https://epms-dev.ets.org/subscription/transactions/';
const PAYPAL_API = process.env.PAYPAL_API ? process.env.PAYPAL_API : 'https://epms-dev.ets.org/paypal/payment/transactions/';
const DCC_API = process.env.DCC_API ? process.env.DCC_API : 'https://epms-dev.ets.org/dcc/transactions/';
const CC_STUB_API = process.env.CC_STUB_API ? process.env.CC_STUB_API : 'https://epms-dev.ets.org/simulator/processCardTokenization';
const IS_STUB_ENABLED = process.env.IS_STUB_ENABLED ? (process.env.IS_STUB_ENABLED === 'true') : true;
const PAYMENTUI_CDN_URL = process.env.PAYMENTUI_CDN_URL ? process.env.PAYMENTUI_CDN_URL : 'http://localhost:4200';
const PAYPAL_STUB_API = process.env.PAYPAL_STUB_API ? process.env.PAYPAL_STUB_API : 'https://epms-dev.ets.org/simulator/paypal/payment';
const CONFIG_API = process.env.CONFIG_API ? process.env.CONFIG_API : 'https://epms-dev.ets.org/config/osc/';

const errKeyToReqKeyMap=new Map<string,string>();
errKeyToReqKeyMap.set('storeId','originatingSystemCode');
errKeyToReqKeyMap.set('customerID','customerID');
errKeyToReqKeyMap.set('transactions[0].merchantDescriptor','merchantDescriptor');
errKeyToReqKeyMap.set('transactions[0].glProjectText','glProjectText');


const getHealthEndpoint = (req: Request, res: Response) => {
  res.status(200).json('Hello World!');
};

// get order line items from request
const getOrderLineItemsFromReq = (req: Request) => {

  const keys = Object.keys(req.body);
  const lineNumberPrefix = 'lineNumber';
  const productNamePrefix = 'productName';
  const productSKUPrefix = 'productSKU';

  const productCodePrefix = 'productCode';
  const unitPricePrefix = 'unitPrice';

  const quantityPrefix = 'quantity';
  const taxAmountPrefix = 'taxAmount';
  const map: Map<string, any> = new Map<string, any>();

  for (let k = 0; k < keys.length; k++) {

    const key = keys[k];
    let matched = true;
    let seperatorInx = -1;
    if (key.startsWith(productNamePrefix)) {
      seperatorInx = productNamePrefix.length;
    } else if (key.startsWith(productSKUPrefix)) {
      seperatorInx = productSKUPrefix.length;
    } else if (key.startsWith(productCodePrefix)) {
      seperatorInx = productCodePrefix.length;
    } else if (key.startsWith(unitPricePrefix)) {
      seperatorInx = unitPricePrefix.length;
    } else if (key.startsWith(quantityPrefix)) {
      seperatorInx = quantityPrefix.length;
    } else if (key.startsWith(taxAmountPrefix)) {
      seperatorInx = taxAmountPrefix.length;
    } else {
      matched = false;
    }

    if (matched) {
      const inx = key.substr(seperatorInx);
      const keyPrefix = key.substr(0, seperatorInx);
      let orderLineItem = map.get(inx);
      if (!orderLineItem) {
        orderLineItem = {};
        map.set(inx, orderLineItem);
      }
      if(req.body[key]) {
        orderLineItem[keyPrefix] = req.body[key];
      }
    }

    if (key.startsWith(productNamePrefix) || key.startsWith(productSKUPrefix)
      || key.startsWith(productCodePrefix) || key.startsWith(unitPricePrefix)
      || key.startsWith(quantityPrefix) || key.startsWith(taxAmountPrefix)) {
    }
  }

  const orderLineItemList: Array<OrderLineItem> = new Array<OrderLineItem>();
  for (const entry of map.entries()) {
    const orderLineItem: OrderLineItem = entry[1] as OrderLineItem;
    orderLineItem.lineNumber = Number(entry[0]);
    orderLineItemList.push(orderLineItem);
  }

  return orderLineItemList;

};

const addProgramApplicationDetails = (req: Request, orderRequest: Order) => {
  orderRequest.programSpecificKey = req.body.programSpecificKey;
  orderRequest.modeOfReceipt = req.body.modeOfReceipt;
  if (orderRequest.modeOfReceipt) {
    orderRequest.hopIndicator = getHopIndicator(orderRequest.modeOfReceipt);
  }
  orderRequest.customerID = req.body.customerID;
  orderRequest.merchantDefinedField1 = req.body.merchantDefinedField1;
  orderRequest.merchantDefinedField2 = req.body.merchantDefinedField2;
  orderRequest.merchantDefinedField3 = req.body.merchantDefinedField3;
  orderRequest.merchantDefinedField4 = req.body.merchantDefinedField4;
  orderRequest.merchantDefinedField5 = req.body.merchantDefinedField5;
  orderRequest.merchantDefinedField6 = req.body.merchantDefinedField6;
  orderRequest.merchantDefinedField7 = req.body.merchantDefinedField7;
  orderRequest.merchantDefinedField8 = req.body.merchantDefinedField8;
  orderRequest.merchantDefinedField9 = req.body.merchantDefinedField9;
  orderRequest.merchantDefinedField10 = req.body.merchantDefinedField10;
  if(req.body.jeAccountNumber) {
    orderRequest.jeAccountNumber = req.body.jeAccountNumber.trim();
  }
  orderRequest.merchantSuccessURL = req.body.merchantSuccessURL;
  orderRequest.merchantRejectURL = req.body.merchantRejectURL;
  orderRequest.merchantErrorURL = req.body.merchantErrorURL;
  orderRequest.merchantTimeoutURL = req.body.merchantTimeoutURL;
  orderRequest.merchantPostURL = req.body.merchantPostURL;
  orderRequest.invoiceHeaderMerchantDescriptorContact = req.body.merchantDescriptorContact;

  if (orderRequest.transactions && orderRequest.transactions[0]) {
    orderRequest.transactions[0].programDefinedDate = req.body.programDefinedDate;
    orderRequest.transactions[0].glProductText = req.body.glProductText;
    orderRequest.transactions[0].glActivityText = req.body.glActivityText;
    orderRequest.transactions[0].glProjectText = req.body.glProjectText;
    orderRequest.transactions[0].serviceCode = req.body.serviceCode;
    orderRequest.transactions[0].merchantDescriptor = req.body.merchantDescriptor;
  }
};

const addSubscriptionFields = (req: Request, orderRequest: Order) => {
  const subscriptionDetail = {} as SubscriptionDetail;
  subscriptionDetail.customerType = req.body.customerType ? req.body.customerType : 'NEW';
  if (req.body.registrationDate) {
    subscriptionDetail.registrationDate = req.body.registrationDate.split('-').join('') ;
  }
  // TODO
  subscriptionDetail.createSubscriptionId = req.body.createSubscriptionId;
  subscriptionDetail.frequency = req.body.frequency ? req.body.frequency : 'ON_DEMAND';
  subscriptionDetail.numberOfPayments = req.body.numberOfPayments ? req.body.numberOfPayments : 0 ;
  subscriptionDetail.subscriptionRenew = req.body.subscriptionRenew;
  if (req.body.startDate) {
     subscriptionDetail.startDate = req.body.startDate.split('-').join('') ;
  }
  subscriptionDetail.subscriptionAmount = req.body.subscriptionAmount ? req.body.subscriptionAmount : 0;
  if (orderRequest.transactions && orderRequest.transactions[0]) {
    orderRequest.transactions[0].subscriptionDetail = subscriptionDetail;
  }
};

const addBasicCetails = (req: Request, orderRequest: Order) => {
  orderRequest.oscSessionId = req.body.oscSessionId;
  orderRequest.baseCurrencyCode = req.body.baseCurrency;
  orderRequest.displayLanguage = req.body.displayLanguage;
  orderRequest.testCenterCountryCode = req.body.testCenterCountry;
  orderRequest.epmsOrderId = req.body.epmsOrderId;

  if (orderRequest.transactions && orderRequest.transactions[0] && orderRequest.transactions[0].amountDetail) {
    orderRequest.transactions[0].amountDetail.baseCurrencyCode = req.body.baseCurrencyCode;
  }
};

const getLinItemKey = (errJsonKey:string) => {
  if (errJsonKey && errJsonKey.indexOf('lineItems') >= 0) {
    const parts = errJsonKey.split('.');
    const name = parts[2];
    const numberPattern = /\d+/g;
    const inx = parts[1].match(numberPattern);
    const nameWithInx=name + (inx?inx[0]:'');
    console.log('nameWithInx = ',nameWithInx);
    return nameWithInx;
  }

}

const prepareErrorResp = (reqKeys:any, err:any): Map<string,any> => {
  const errMap = new Map();
  if(err && err.response && err.response.data && err.response.data.details) {
    const errDetails = err.response.data.details;
    const errDetailKeys = Object.keys(errDetails);

    for(const errKey of errDetailKeys){

      if(errKeyToReqKeyMap.has(errKey)){
        errMap.set(errKeyToReqKeyMap.get(errKey), errDetails[errKey]);
      } else if(getLinItemKey(errKey)){
        errMap.set(getLinItemKey(errKey), errDetails[errKey]);
      }

      }
  }
  return errMap;
}


// creates the order from the form data
const createOrder = (req: Request, res: Response) => {
  console.log('form data from the post body>>>>>', JSON.stringify(req.body));
  const returnField = validateRequest(req.body);// return obj contains timestamp and match (Boolean)
  console.log("Signature Match: "+returnField.signatureMatch +" Timestamp validation: "+returnField.timestampMatch);
  if(returnField.signatureMatch && returnField.timestampMatch){
    const reqKeys = Object.keys(req.body);
    const orderRequest = {} as Order;
    // prepare address and assign to  request.
    const sAddress = {} as Address;
    if(req.body.shippingAddressLine1)
      sAddress.addressLine1 = req.body.shippingAddressLine1.trim();
    if(req.body.shippingAddressLine2)
      sAddress.addressLine2 = req.body.shippingAddressLine2.trim();
    if(req.body.shippingAddressCity)
      sAddress.city = req.body.shippingAddressCity.trim();
    if(req.body.shippingAddressCountry)
      sAddress.country = req.body.shippingAddressCountry.trim();
    if(req.body.shippingAddressFirstName)
      sAddress.firstName = req.body.shippingAddressFirstName.trim();
    if(req.body.shippingAddressLastName)
      sAddress.lastName = req.body.shippingAddressLastName.trim();
    if(req.body.shippingAddressPostalCode)
      sAddress.postalCode = req.body.shippingAddressPostalCode.trim();
    if(req.body.shippingAddressState)
      sAddress.region = req.body.shippingAddressState.trim();
    if(req.body.shippingAdressCompany)
      sAddress.company = req.body.shippingAdressCompany.trim();
    // assign shipping address
    orderRequest.shippingAddress = sAddress;
    // prepare contact and assign to order request.
    const sContact = {} as Contact;
    if(req.body.shippingAddressEmail)
      sContact.email = req.body.shippingAddressEmail.trim();
    if(req.body.shippingAddressPhoneNumber)
      sContact.phoneNumber = req.body.shippingAddressPhoneNumber.trim();
    // assign shipping contact here
    orderRequest.shippingContact = sContact;
    orderRequest.storeId = req.body.originatingSystemCode.trim();
    orderRequest.sourceType = req.body.sourceType;
    // prepare transaction obj here.
    const orderTranscation = {} as Transaction;
    // prepare order line details
    const orderLineItemList = getOrderLineItemsFromReq(req);
    console.log('orderLineItemList = ', orderLineItemList);
    if (orderLineItemList && orderLineItemList.length > 0) {
      orderTranscation.lineItems = orderLineItemList;
    }
    // prepare amount details here
    const amntDetail = {} as OrderAmountDetail;
    // amntDetail.baseCurrencyAmount = req.body.amount;
    amntDetail.baseCurrencyAmount = req.body.orderAmount;
    // amntDetail.dccopted = req.body.dccopted;
    // amntDetail.shippingAmount = req.body.shippingAmount;
    amntDetail.taxAmount = req.body.baseTaxAmount;
    // amntDetail.vatAmount = req.body.vatAmount;

    // assign amount details here
    orderTranscation.amountDetail = amntDetail;
    orderTranscation.resourceText = req.body.resourceText ? req.body.resourceText : null;
    orderRequest.transactions = [orderTranscation];

    addBasicCetails(req, orderRequest);
    addProgramApplicationDetails(req, orderRequest);
    if (req.body?.sourceType?.toLowerCase() === 'subscription'){
      addSubscriptionFields(req, orderRequest);
    }
    const config = {
      headers: {'Content-Type': 'application/json'}
    };
    console.log('createOrderRequest = ', JSON.stringify(orderRequest));
    res.header('Access-Control-Allow-Origin', '*');
    axios.post(ORDER_API, JSON.stringify(orderRequest), config)
      .then((response) => {
        const transactionId = response.data.transactions[0].orderTransactionId.trim();
        console.log('success create order. Transaction id is >>>>>', transactionId);
        let redirectUrl = PAYMENTUI_CDN_URL + '/?t=' + transactionId;
        console.log(` URL to Redirect to ${redirectUrl}`);
        if (IS_STUB_ENABLED) {
          redirectUrl += '&isStub=true';
        }
        res.status(200).json({Location: redirectUrl});
      }).catch((err) => {
        console.error(`Error from the Create Order ${err}`);

        let statusCode;
        let statusData;
        if(err && err.response ) {
          console.error(`Error from the Create Order status ${err.response.data.status}`);
          console.error(`Error from the Create data  ${JSON.stringify(err.response.data)}`);
          console.error(`Error from the Create details ${err.response.details}`);
          if (err.response.data) {
            statusCode = err.response.data.status;
            statusData = err.response.data;
            res.status(err.response.data.status).send(err.response.data);
          } else {
            statusCode = 500;
            statusData = {'statusMsg':'unknown'};
          }
        } else {
          statusCode = 500;
          statusData = {'statusMsg':'unknown'};
        }
      res.status(statusCode).send(statusData);
      });
  } else {
    if(returnField.timestampMatch === false && returnField.signatureMatch === true){
      console.log('Invalid Request - Transaction request is out of time limit!');
      res.status(400).send('Invalid Request - Transaction request is out of time limit!');
    }else if(returnField.signatureMatch === false && returnField.timestampMatch === true){
      console.log('Invalid Request - signature verfication failed!!');
      res.status(400).send('Invalid Request - signature verfication failed!');
    } else {
      console.log('Invalid Request - Timestamp and Signature failure!');
      res.status(400).send('Invalid Request - Timestamp and Signature failure!');
    }
  }
};
const sendErrorRespToMerchant=(orderRequest:any)=>{
  // const url="http://localhost:4000/epmstest/sendOrderErrorResponse";
  const url=orderRequest.merchantErrorURL;
  const config = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  };
  axios.post(url, JSON.stringify(orderRequest), config).then((response) => {

  }).catch((err) => {

  });

};

// returns the order details for the requested transaction.
const getOrderDetails = (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*');
  const transactionId = req.params.id.trim();
  console.log('Transaction id to get the details for>>>>', transactionId);
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.get(TRANSACTION_API + transactionId, config)
    .then((response) => {
      console.log('data',JSON.stringify(response.data));
      const transactionRes = {} as Transaction;
      transactionRes.amount = response.data.amount;
      transactionRes.amountDetail = response.data.amountDetail;
      transactionRes.lineItems = response.data.lineItems;
      transactionRes.shippingAddress = response.data.order.shippingAddress;
      transactionRes.shippingContact = response.data.order.shippingContact;
      transactionRes.pmtCounter = response.data.order.attemptCounter;
      transactionRes.storeId = response.data.order.storeId;
      transactionRes.modeOfReceipt = response.data.order.modeOfReceipt;
      transactionRes.subscriptionDetail = response.data.subscriptionDetail;
      transactionRes.paymentMethodDetail = response.data.paymentMethodDetail;
      transactionRes.order = response.data.order;
      transactionRes.merchantDescriptor =response.data.merchantDescriptor;
      transactionRes.merchantDescriptorContact =response.data.invoiceHeaderMerchantDescriptorContact;
      transactionRes.decision = response.data.decision;
      transactionRes.pgmResponseCode = response.data.pgmResponseCode;
      transactionRes.pgmResponseMessage = response.data.pgmResponseMessage;
      transactionRes.glProjectText = response.data.glProjectText;
      transactionRes.glActivityText = response.data.glActivityText;
      transactionRes.glProductText = response.data.glProductText;
      transactionRes.resourceText = response.data.resourceText;
      transactionRes.serviceCode = response.data.serviceCode;
      transactionRes.programDefinedDate = response.data.programDefinedDate;
      transactionRes.programSpecificKey = response.data.programSpecificKey;
      transactionRes.processorDetail = response.data.processorDetail;
      transactionRes.billingAddress = response.data.billingAddress;
      transactionRes.paymentMethodCode = response.data.paymentMethodCode;
      transactionRes.orderTransactionId =response.data.orderTransactionId;
      transactionRes.transactionTime =response.data.transactionTime;
      transactionRes.billingContact = response.data.billingContact;
      transactionRes.gatewayReferenceId = response.data.gatewayReferenceId;
      transactionRes.achDetail = response.data.achDetail;
      transactionRes.sourceType = response.data.order.sourceType;
      transactionRes.paymentTypeCode = response.data.paymentTypeCode;


      console.log('Success getting Order details for transaction id ', transactionId);
      res.status(response.status).json(transactionRes);
    })
    .catch((error) => {
      console.error('Error getting order details for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
      res.status(error.response.data.status).send(error.response.data.error);
    });
};
const getPGResponse = (req: Request, res: Response) => {
  res.header('Access-Control-Allow-Origin', '*');
  const transactionId = req.params.id.trim();
  console.log('Transaction id to get the details for>>>>', transactionId);
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.get(TRANSACTION_API + transactionId.trim() + '/final', config)
    .then((response) => {
      console.log('Response in getPGResponse ==>' + JSON.stringify(response.data));
      const data = response.data;
      const respData = new PgResponseData() ;
      //assign values to response fields
      preparePgResponse(data,respData);
      //create signed field for a response
      const respObj = createSignedResponse(respData);
      respData.transactionSignature = respObj.transactionSignature;
      respData.signedFields = respObj.signField;
      respData.timestamp = String(respObj.timestamp);
      console.log("In PAYMENT UI transactionSignature: <<start>>"+respObj.transactionSignature+"<<end>>>>");
      console.log('Success getting Order details for transaction id ', transactionId);
      // for json
      res.status(response.status).json(respData);

      // //application/x-www-form-urlencoded
      // const formUrlencodedData = [];
      // const entries = Object.entries(respData);
      // for(const entry of entries)
      // {
      //   formUrlencodedData.push([entry[0],entry[1]].join('='));
      // }
      // const formUrlencodedDataStr=formUrlencodedData.join('&');
      // console.log('formUrlencodedDataStr = '+ formUrlencodedDataStr);
      // res.status(response.status).contentType('application/x-www-form-urlencoded').send(formUrlencodedDataStr);
    })
    .catch((error) => {
      console.error('Error getting order details for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
      res.status(error.response.data.status).send(error.response.data.error);
    });
};




// Returns the credit card token details for the transaction.
const getCcTokenDetails = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  const sourceType = req.query.sourceType;
  let url;
  console.log('sourceType = ' + sourceType);
  if (sourceType === 'SALE') {
    url = '/authorize-session?sourceType=SALE';
  } else {
    url = '/authorize-session?sourceType=SUBSCRIPTION';
  }
  axios.get(TOKEN_API + transactionId + url, config)
    .then((response) => {
      console.log('Success getting token details for transactionid ', transactionId);
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      console.error('Error getting token details for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
      res.status(error.response.data.status).send(error.response.data.error);
    });
};

// Creates the Payment with Credit card Details
const createPayment = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  const paymentType = req.params.pmtType.trim();
  let paymentUrl = PAYMENT_API + transactionId;
  const subscriptionDetailId = req.query.subscriptionDetailId;
  if (paymentType === 'bank') {
    paymentUrl += '/sale/telecheck';
  } else if (paymentType === 'subscription') {
    paymentUrl = SUBSCRIPTION_API + transactionId;

  } else if (paymentType === 'cc') {
    paymentUrl += '/sale/creditcard';
  }
 console.log("The payment url " +  paymentUrl );
  console.log('create payment for id ', transactionId, ' with req body ', JSON.stringify(req.body));
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.post(paymentUrl, req.body, config)
    .then((response) => {
      console.log('success create payment for id  ', transactionId, '  with response ', JSON.stringify(response.data));
      res.status(response.status).json(response.data);
    }).catch((error) => {
    console.error('Error creating payment for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
    res.status(error.response.data.status).send(error.response.data.error);
  });
};

// 3DS Details will be retrieved from cache.
const get3dsDeatails = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  console.log('getting 3dsdetails for transaction id ', transactionId);
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.patch(PAYMENT_API + transactionId + '/sale/3dsecure', config)
    .then((response) => {
      console.log('success getting 3ds details for id ', transactionId, ' with response ', JSON.stringify(response.data));
      res.status(response.status).json(response.data);
    }).catch((error) => {
    console.error('Error getting 3ds details for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
    res.status(error.response.data.status).send(error.response.data.error);
  });
};
// termurl -> challenge verified -> post the data to the term url
// getChallengeResponse
const getChallengeResponse = (req: Request, res: Response) => {
  const transactionId = req.query.id;
  console.log('challenge response for id ', transactionId, ' response ', JSON.stringify(req.body));
  // cres || pares || 3session data(optional).
  // patch call with the cres or pares to the transactions/{transactionId}/sale/3dsecure/acsResponse
  // based on the response prepare the query string and
  // redirect to the client with the transaction id and error code.
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  const challengePatchRequest = {
    paRes: req.body.PaRes ? req.body.PaRes : null,
    md: req.body.MD ? req.body.MD : null,
    threeDSSessionData: req.body.threeDSSessionData ? req.body.threeDSSessionData : null,
    cres: req.body.cres ? req.body.cres : null
  };
  console.log('challenge patch request for id ', transactionId, JSON.stringify(challengePatchRequest));
  let redirectUrl = PAYMENTUI_CDN_URL + '/?t=' + transactionId;
  axios.post(PAYMENT_API + transactionId + '/sale/3dsecure/acsResponse', JSON.stringify(challengePatchRequest), config)
    .then((response) => {
      console.log('success patch request for id ', transactionId, '  response ', JSON.stringify(response.data));
      const processorErrorResponse = response.data.processorResponse ? response.data.processorResponse : response.data.errorResponse;
      const additionalParams = '&status=' + response.data.status + '&code=' + processorErrorResponse.responseCode;
      redirectUrl += additionalParams;
      if (IS_STUB_ENABLED) {
        redirectUrl += '&isStub=true';
      }

      res.status(200).json({Location: redirectUrl});
      console.log(`Challenge URL to Redirect to ${redirectUrl}`);
    }).catch((error) => {
    console.log('error patch request for id ', transactionId, ' response  ', error.response.data);
    redirectUrl += '&status=error';
    if (IS_STUB_ENABLED) {
      redirectUrl += '&isStub=true';
    }
    res.status(200).json({Location: redirectUrl});
  });
};

const generateNewTransactionId = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  console.log('Get new transaction for id ', transactionId);
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.post(TRANSACTION_API + transactionId + '/retry', JSON.stringify(req.body), config)
    .then((response) => {
      console.log('success getting new transaction id ', transactionId, '  response ', JSON.stringify(response.data));
      res.status(response.status).json(response.data.orderTransactionId);
    }).catch((error) => {
    console.log('error getting new transaction id ', transactionId, ' response  ', error.response.data);
    res.status(error.response.data.status).send(error.response.data.error);
  });
};

// Creates the Paypal order
const createPaypalOrder = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  console.log('create payment for id ', transactionId, ' with req body ', JSON.stringify(req.body));
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.post(PAYPAL_API + transactionId + '/order', config)
    .then((response) => {
      console.log('success create paypal order for id  ', transactionId, '  with response ', JSON.stringify(response.data));
      res.status(response.status).json(response.data);
    }).catch((error) => {
    console.error('Error creating paypal for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
    res.status(error.response.data.status).send(error.response.data.error);
  });
};

// Capture the Paypal order
const capturePaypalOrder = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  console.log('create payment for id ', transactionId, ' with req body ', JSON.stringify(req.body));
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.post(PAYPAL_API + transactionId + '/capture', config)
    .then((response) => {
      console.log('success capture paypal order for id  ', transactionId, '  with response ', JSON.stringify(response.data));
      res.status(response.status).json(response.data);
    }).catch((error) => {
    console.error('Error capturing paypal for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
    res.status(error.response.data.status).send(error.response.data.error);
  });
};

// get the DCC details if transaction is eligible
const getDccDetails = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  console.log('Get DCC details for id ', transactionId);
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.post(DCC_API + transactionId + '/sale', config)
    .then((response) => {
      console.log('success get DCC details for id  ', transactionId, '  with response ', JSON.stringify(response.data));
      res.status(response.status).json(response.data);
    }).catch((error) => {
    console.error('Error getting DCC details for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
    res.status(error.response.data.status).send(error.response.data.error);
  });
};

// post the CC details to stub
const postCcDetailsToStub = (req: Request, res: Response) => {
  const transactionId = req.params.id.trim();
  console.log('Post CC stub details for id ', transactionId);
  const config = {
    headers: {'Content-Type': 'application/json'}
  };
  axios.post(CC_STUB_API, req.body, config)
  .then((response) => {
    console.log('success Post CC stub details for id  ', transactionId, '  with response ', JSON.stringify(response.data));
    res.status(response.status).json(response.data);
  }).catch((error) => {
    console.error('Error Post CC stub details for id ', transactionId, ' error from the service ', JSON.stringify(error.response.data));
    res.status(error.response.data.status).send(error.response.data.error);
  });
};

// get ocs config details
const getOscConfig = (req: Request, res: Response) => {
  const headers = {
    headers: {'Content-Type': 'application/json'}
  };
  const hopId = req.params.hopId;
  const oscCode = req.params.oscCode;
  const url = `${CONFIG_API}${oscCode}/hop/${hopId}`;
  console.log('config url ', url);
  axios.get(url, headers).then(apiResp => {
    console.log(` Success getting response from the config service for ${oscCode} and HOPID ${hopId}`);
    res.status(apiResp.status).json(apiResp.data);
  }).catch(err => {
    console.error(` Error getting response from the config service for ${oscCode} and HOPID ${hopId}. response ${err}`);
    res.status(err.response.data.status).json(err.response.data.error);
  });
};

//post user choice of paypal stub
const postPaypalStubData = (req: Request, res: Response) => {
  console.log('postPaypalStubData config url ', PAYPAL_STUB_API);
  axios.post(PAYPAL_STUB_API, req.body)
  .then((response) => {
    console.log('success in post of paypal stub data ', JSON.stringify(response.data));
    res.status(response.status).json(response.data);
  }).catch((error) => {
    console.error('Error in post of paypal stub data ', JSON.stringify(error.response.data));
    res.status(error.response.data.status).send(error.response.data.error);
  });
};

export const getRouter = () => {
  const router = Router();
  router.use('/epms/public', express.static('dist/public'));
  router.use('/epms/favicon.ico', express.static('dist/public/favicon.ico'));

  // Used by program app to make secure call.
  router.post('/epms/order', createOrder);

  //Used by program app for unsecured call.
  router.post('/epms/order-ns', createOrder);

  router.get('/epms/client', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.sendFile(path.resolve(`./dist/public/index.html`));
  });
  router.get('/epms/health', getHealthEndpoint);
  router.get('/epms/order/:id', getOrderDetails);
  router.get('/epms/token/:id', getCcTokenDetails);
  router.post('/epms/payment/:id/:pmtType', createPayment);
  router.patch('/epms/3ds/:id', get3dsDeatails);
  router.post('/epms/challenge/response', getChallengeResponse);
  router.get('/epms/transaction/generate/:id', generateNewTransactionId);
  router.get('/epms/paypal/order/:id' , createPaypalOrder);
  router.get('/epms/paypal/capture/:id' , capturePaypalOrder);
  router.get('/epms/dcc/:id' , getDccDetails);
  router.post('/epms/stub/:id' , postCcDetailsToStub);
  router.get('/epms/config/osc/:oscCode/hop/:hopId', getOscConfig);
  router.post('/epms/paypal/stub', postPaypalStubData);
  router.get('/epms/pg/response/:id', getPGResponse);



  return router;
};

const getHopIndicator = (modeOfReceipt: string): string => {
  switch (modeOfReceipt) {
    case 'M':
    case 'T':
    case 'F':
    case 'V':
      return'IHOP';
    case 'N':
    case 'I':
      return 'CFHOP';
    default:
      return '';
    }
}

