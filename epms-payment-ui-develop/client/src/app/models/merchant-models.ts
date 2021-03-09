import {Order} from "./order";
import {Transaction} from "./transaction";
import {SubscriptionDetail} from "./subscription-detail";
import {PaymentMethodDetail} from "./payment-method-detail";
import {OrderAmountDetail} from "./order-amount-detail";
import {OrderLineItem} from "./order-line-item";
import {ShippingAddress} from "./shipping-address";
import {ProcessorDetails} from './processor-details';
import {Contact} from "./contact";
import {PaymentResponse} from "./payment-response";
import {PaypalResponse} from "./paypal";

export interface PaymentActionData{

  url: string;
  order: Order;
  paymentMethod: string;
  orderTransaction: Transaction;
  subscriptionDetail?: SubscriptionDetail;
  payment?: PaymentMethodDetail;
  orderAmountDetail?: OrderAmountDetail;
  lineItems?: Array<OrderLineItem>;
  shippingAddress?: ShippingAddress;
  processorDetails?: ProcessorDetails;
  shippingContact?: Contact;
  paymentResponse?: PaymentResponse;
  merchantDefinedField1: string;
}

export interface MerchantResponseData{
  url: string;
  orderTransaction?: Transaction;
  merchantPaymentReq?: MerchantPaymentReq;
  paymentResponse?: PaymentResponse;
  paypalResponse?: PaypalResponse;
}

export interface MerchantPaymentReq{
  maskedAccountNumber?: number;
  authCode?: number;
  cardHolderName?: string;
  expiryMonthYear?: number;
  brandName?: string;
  bin?: number;
  cardToken?: number;
  cardNumberLast4?: number;
  paymentMethodDetailId?: number;



}
