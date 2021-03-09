import { Address } from './address';
import { Contact } from './contact';
import {ShippingAddress} from './shipping-address';
import { Transaction } from './transaction';

export interface Order {
  merchantContact: any;
  billingAddress?: Address;
  billingContact?: Contact;
  customerID?: string;
  project?: string;
  merchantDefinedField1?: string;
  merchantDefinedField2?: string;
  merchantDefinedField3?: string;
  merchantDefinedField4?: string;
  merchantDefinedField5?: string;
  merchantDefinedField6?: string;
  merchantDefinedField7?: string;
  merchantDefinedField8?: string;
  merchantDefinedField9?: string;
  merchantDefinedField10?: string;
  merchantDescriptor?: string;
  merchantErrorURL?: string;
  merchantRejectURL?: string;
  merchantSuccessURL?: string;
  merchantTimeoutURL?: string;
  merchantPostURL?: string;
  displayLanguage?: string;
  modeOfReceipt?: string;
  hopIndicator: string;
  oscSessionId?: string;
  programSpecificKey?: string;
  shippingAddress?: ShippingAddress;
  shippingContact?: Contact;
  storeId?: string;
  transactions?: Array<Transaction>;
  epmsOrderId?: string;
  orderAmount?: number;
  orderStatus?: string;
  attemptCounter?: number;
  testCenterCountryCode?: string;
  sourceType?: string;
  consentText?: string;
  fiservStoreId?: string;
  taxAmount?: number;
  invoiceHeaderMerchantDescriptorContact?: string;
  subscriptionRenew?: string;
  signedFields?: string;
  transactionSignature?: string;
  paymentSourceCode?: string;
  jeAccountNumber?: string;
  orderRefundAmount?: number;
  baseCurrencyCode?: string;




}
