// @ts-ignore
import {PgResponseData} from "../client/src/app/models/PgResponseData";

export const preparePgResponse = (data: any, respData: PgResponseData) => {
  try {
    console.log('data = ' + JSON.stringify(data));
    respData.decision = data.decision ? data.decision : 'Error';
    respData.pgmResponseCode = data.pgmResponseCode ? data.pgmResponseCode : '';
    respData.pgmResponseMessage = data.pgmResponseMessage ? data.pgmResponseMessage : '';
    respData.epmsTransactionID = data.orderTransactionId ? data.orderTransactionId : '';
    respData.programDefinedDate = data.programDefinedDate ? data.programDefinedDate : '';
    respData.programSpecificKey = (data.order && data.order.programSpecificKey) ? data.order.programSpecificKey : '';
    respData.methodOfPayment = data.paymentMethodCode ? data.paymentMethodCode : '';
    const paymentTypeCode = data.paymentTypeCode ? data.paymentTypeCode : '';
    //cc
    if ('PAYMENT_CARD' === paymentTypeCode) {
      respData.expiryYear = data.paymentMethodDetail.expiryMonthYear.split('/')[1];
      respData.expiryMonth = data.paymentMethodDetail.expiryMonthYear.split('/')[0];
      respData.cardType = (data.paymentMethodDetail && data.paymentMethodDetail.cardType) ? data.paymentMethodDetail.cardType : '';
      respData.cardNumberLast4 = (data.paymentMethodDetail && data.paymentMethodDetail.cardNumberLast4) ? data.paymentMethodDetail.cardNumberLast4 : '';
      respData.referenceNumber = (data.achDetail && data.achDetail.referenceNumber) ? data.achDetail.referenceNumber : '';
      respData.authorizationCode = (data.processorDetail && data.processorDetail.authorizationCode) ? data.processorDetail.authorizationCode : '';
    }

    //telecheck
    if ('TELECHECK' === paymentTypeCode) {
      respData.methodOfPayment = 'E-Check';
      respData.accountType = (data.paymentMethodDetail && data.paymentMethodDetail.accountType) ? data.paymentMethodDetail.accountType : '';
      respData.routingNumber = (data.paymentMethodDetail && data.paymentMethodDetail.routingNumber) ? data.paymentMethodDetail.routingNumber : '';
      respData.authorizationCode = (data.processorDetail && data.processorDetail.authorizationCode) ? data.processorDetail.authorizationCode : '';
      respData.consentSigned = (data.order && data.order.consentText) ? data.order.consentText : '';
      respData.referenceNumber = (data.achDetail && data.achDetail.referenceNumber) ? data.achDetail.referenceNumber : '';
    }

    //paypal
    if ('PAYPAL' === paymentTypeCode) {
      respData.paypalOrderId = data.gatewayReferenceId ? data.gatewayReferenceId : '';
      respData.accountType = (data.paymentMethodDetail && data.paymentMethodDetail.accountType) ? data.paymentMethodDetail.accountType : '';
      respData.payerID = (data.paymentMethodDetail && data.paymentMethodDetail.paypalPayerId) ? data.paymentMethodDetail.paypalPayerId : '';
    }

    //
    respData.serviceCode = data.serviceCode ? data.serviceCode : '';
    respData.resourceText = data.resourceText ? data.resourceText : '';
    respData.glProductText = data.glProductText ? data.glProductText : '';
    respData.glProjectText = data.glProjectText ? data.glProjectText : '';
    respData.glActivityText = data.glActivityText ? data.glActivityText : '';
    respData.epmsOrderID = (data.order && data.order.epmsOrderId) ? data.order.epmsOrderId : '';
    respData.originatingSystemCode = (data.order && data.order.storeId) ? data.order.storeId : '';
    respData.oscSessionId = (data.order && data.order.oscSessionId) ? data.order.oscSessionId : '';
    respData.sourceType = (data.order && data.order.sourceType) ? data.order.sourceType : '';
    respData.customerID = (data.order && data.order.customerID) ? data.order.customerID : '';
    respData.transactionTime = (data.order && data.order.transactionTime) ? data.order.transactionTime : '';
    respData.modeOfReceipt = (data.order && data.order.modeOfReceipt) ? data.order.modeOfReceipt : '';
    respData.merchantDescriptor = (data.order && data.merchantDescriptor) ? data.merchantDescriptor : '';
    respData.merchantDescriptorContact = (data.order && data.order.invoiceHeaderMerchantDescriptorContact) ? data.order.invoiceHeaderMerchantDescriptorContact : '';
    respData.jeAccountNumber = (data.order && data.order.jeAccountNumber) ? data.order.jeAccountNumber : '';
    respData.attemptCounter = (data.order && data.order.attemptCounter) ? data.order.attemptCounter : '';
    respData.displayLanguage = (data.order && data.order.displayLanguage) ? data.order.displayLanguage : '';
    respData.merchantDefinedField1 = (data.order && data.order.merchantDefinedField1) ? data.order.merchantDefinedField1 : '';
    respData.merchantDefinedField2 = (data.order && data.order.merchantDefinedField2) ? data.order.merchantDefinedField2 : '';
    respData.merchantDefinedField3 = (data.order && data.order.merchantDefinedField3) ? data.order.merchantDefinedField3 : '';
    respData.merchantDefinedField4 = (data.order && data.order.merchantDefinedField4) ? data.order.merchantDefinedField4 : '';
    respData.merchantDefinedField5 = (data.order && data.order.merchantDefinedField5) ? data.order.merchantDefinedField5 : '';
    respData.merchantDefinedField6 = (data.order && data.order.merchantDefinedField6) ? data.order.merchantDefinedField6 : '';
    respData.merchantDefinedField7 = (data.order && data.order.merchantDefinedField7) ? data.order.merchantDefinedField7 : '';
    respData.merchantDefinedField8 = (data.order && data.order.merchantDefinedField8) ? data.order.merchantDefinedField8 : '';
    respData.merchantDefinedField9 = (data.order && data.order.merchantDefinedField9) ? data.order.merchantDefinedField9 : '';
    respData.merchantDefinedField10 = (data.order && data.order.merchantDefinedField10) ? data.order.merchantDefinedField10 : '';
    respData.subscriptionRenew = (data.subscriptionDetail && data.subscriptionDetail.tokenReused) ? data.subscriptionDetail.tokenReused : false;
    respData.testCenterCountry = (data.order && data.order.testCenterCountryCode) ? data.order.testCenterCountryCode : '';
    respData.orderAmount = (data.order && data.order.orderAmount) ? data.order.orderAmount : '';
    respData.merchantErrorURL = (data.order && data.order.merchantErrorURL) ? data.order.merchantErrorURL : '';
    respData.merchantRejectURL = (data.order && data.order.merchantRejectURL) ? data.order.merchantRejectURL : '';
    respData.merchantSuccessURL = (data.order && data.order.merchantSuccessURL) ? data.order.merchantSuccessURL : '';
    respData.merchantTimeoutURL = (data.order && data.order.merchantTimeoutURL) ? data.order.merchantTimeoutURL : '';
    respData.merchantPostURL = (data.order && data.order.merchantPostURL) ? data.order.merchantPostURL : '';
    respData.storeID = (data.order && data.order.fiservStoreId) ? data.order.fiservStoreId : '';
    respData.ipgTransactionId = data.gatewayReferenceId ? data.gatewayReferenceId : '';

    //PaymentMethodDetail
    respData.maskedAccountNumber = (data.paymentMethodDetail && data.paymentMethodDetail.maskedAccountNumber) ? data.paymentMethodDetail.maskedAccountNumber : '';

    //amountdetails


    respData.baseCurrency = (data.amountDetail && data.amountDetail.baseCurrencyCode) ? data.amountDetail.baseCurrencyCode : '';
    respData.foreignAmount = (data.amountDetail && data.amountDetail.foreignCurrencyAmount) ? data.amountDetail.foreignCurrencyAmount : '';
    respData.foreignCurrency = (data.amountDetail && data.amountDetail.foreignCurrencyCode) ? data.amountDetail.foreignCurrencyCode : '';
    respData.basetaxAmount = (data.amountDetail && data.amountDetail.taxAmount) ? data.amountDetail.taxAmount : '';
    respData.exchangeRate = (data.amountDetail && data.amountDetail.exchangeRate) ? data.amountDetail.exchangeRate : '';
    respData.inquiryRateId = (data.amountDetail && data.amountDetail.inquiryRateId) ? data.amountDetail.inquiryRateId : '';
    respData.margin = (data.amountDetail && data.amountDetail.margin) ? data.amountDetail.margin: '';

    //subscription details
    respData.registrationDate = (data.subscriptionDetail && data.subscriptionDetail.registrationDate) ? data.subscriptionDetail.registrationDate : '';
    respData.customerType = (data.subscriptionDetail && data.subscriptionDetail.customerType) ? data.subscriptionDetail.customerType : '';
    respData.numberOfPayments = (data.subscriptionDetail && data.subscriptionDetail.numberOfPayments) ? data.subscriptionDetail.numberOfPayments : 0;
    respData.frequency = (data.subscriptionDetail && data.subscriptionDetail.frequency) ? data.subscriptionDetail.frequency : '';
    respData.subscriptionAmount = (data.subscriptionDetail && data.subscriptionDetail.subscriptionAmount) ? data.subscriptionDetail.subscriptionAmount : '';
    respData.subscriptionTransactionId = (data.subscriptionDetail && data.subscriptionDetail.subscriptionDetailId) ? data.subscriptionDetail.subscriptionDetailId : '';

    //billing detail

    respData.billingAddressCity = (data.billingAddress && data.billingAddress.city) ? data.billingAddress.city : '';
    respData.billingAddressCompany = (data.billingAddress && data.billingAddress.company) ? data.billingAddress.company : '';
    respData.billingAddressFirstName = (data.billingAddress && data.billingAddress.firstName) ? data.billingAddress.firstName : '';
    respData.billingAddressLastName = (data.billingAddress && data.billingAddress.lastName) ? data.billingAddress.lastName : '';
    respData.billingAddressPostalCode = (data.billingAddress && data.billingAddress.postalCode) ? data.billingAddress.postalCode : '';
    respData.billingAddressState = (data.billingAddress && data.billingAddress.region) ? data.billingAddress.region : '';
    respData.billingAddressLine1 = (data.billingAddress && data.billingAddress.addressLine1) ? data.billingAddress.addressLine1 : '';
    respData.billingAddressLine2 = (data.billingAddress && data.billingAddress.addressLine2) ? data.billingAddress.addressLine2 : '';
    respData.billingAddressEmail = (data.billingContact && data.billingContact.email) ? data.billingContact.email : '';
    respData.billingAddressCountry = (data.billingAddress && data.billingAddress.country) ? data.billingAddress.country : '';
    respData.billingAddressPhoneNumber = (data.billingContact && data.billingContact.phoneNumber) ? data.billingContact.phoneNumber : '';

    //shipping details


    if (data.order && data.order.shippingAddress) {
      const shippingAddress = data.order.shippingAddress;
      console.log('shippingAddress = ' + JSON.stringify(shippingAddress));
      respData.shippingAddressFirstName = shippingAddress.firstName ? shippingAddress.firstName : '';
      respData.shippingAddressLastName = shippingAddress.lastName ? shippingAddress.lastName : '';
      respData.shippingAddressCity = shippingAddress.city ? shippingAddress.city : '';
      respData.shippingAddressLine1 = shippingAddress.addressLine1 ? shippingAddress.addressLine1 : '';
      respData.shippingAddressLine2 = shippingAddress.addressLine2 ? shippingAddress.addressLine2 : '';
      respData.shippingAddressCountry = shippingAddress.country ? shippingAddress.country : '';
      respData.shippingAddressPostalCode = shippingAddress.postalCode ? shippingAddress.postalCode : '';
      respData.shippingAddressState = shippingAddress.region ? shippingAddress.region : '';
      respData.shippingAdressCompany = shippingAddress.company ? shippingAddress.company : '';
    } else {
      setDefaultShippingAddressVals(respData);
    }
    if (data.orde && data.order.shippingContact) {
      const shippingContact = data.order.shippingContact;
      respData.shippingAddressPhoneNumber = shippingContact.phoneNumber ? data.order.shippingContact.phoneNumber : '';
      respData.shippingAddressEmail = shippingContact.email ? data.order.shippingContact.email : '';
    } else {
      respData.shippingAddressPhoneNumber = '';
      respData.shippingAddressEmail = '';
    }


    const orderLineItems = data.lineItems;
    processLineItems(orderLineItems, respData);

  } catch (err) {
    console.log('err = ', err);
  }
}

const setDefaultShippingAddressVals = (respData: PgResponseData) => {
  respData.shippingAddressFirstName = '';
  respData.shippingAddressLastName = '';
  respData.shippingAddressCity = '';
  respData.shippingAddressLine1 = '';
  respData.shippingAddressLine2 = '';
  respData.shippingAddressCountry = '';
  respData.shippingAddressPostalCode = '';
  respData.shippingAddressState = '';
  respData.shippingAdressCompany = '';

}

const processLineItems = (orderLineItems: any, respData: any) => {

  console.log('orderLineItems ', orderLineItems);
  if (orderLineItems && orderLineItems.length > 0) {

    let i = 0;
    for (let orderLineItem of orderLineItems) {
      respData['productName' + i] = orderLineItem.productName;
      respData['unitPrice' + i] = orderLineItem.unitPrice;

      respData['productCode' + i] = orderLineItem.productCode;
      respData['productSKU' + i] = orderLineItem.productSKU;

      respData['quantity' + i] = orderLineItem.quantity;
      respData['taxAmount' + i] = orderLineItem.taxAmount;

      respData['foreignCurrencyTaxAmount' + i] = orderLineItem.foreignCurrencyTaxAmount;
      respData['foreignCurrencyUnitPrice' + i] = orderLineItem.foreignCurrencyUnitPrice;

      i++;
    }
  }
}


