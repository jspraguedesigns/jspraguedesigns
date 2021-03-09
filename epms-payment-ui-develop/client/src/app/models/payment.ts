import { Address } from './address';
import { Contact } from './contact';
import { GatewayResponse } from './payment-response';
import { OrderLineItem } from './order-line-item';

export interface Payment {
  billingAddress?: Address;
  billingContact?: Contact;
  dccOpted?: boolean;
  accountNumber?: string;
  accountType?: string;
  achType?: string;
  agentId?: string;
  checkNumber?: string;
  checkType?: string;
  consentText?: string;
  routingNumber?: string;
  cardType?: string;
  epmsSubscriptionId?: number;
}

export interface CurrencyConversionResponse {
  currency?:	string;
  dccOffered: boolean;
  errorCode?:	string;
  errorDetails?: Array<DccErrorDetails>;
  errorMessage?: string;
  exchangeRate?: number;
  foreignCurrency?:	string;
  foreignCurrencyGrandTotalAmount?:	number;
  foreignCurrencyGrandTotalTaxAmount?: number;
  gatewayResponse?: GatewayResponse;
  grandTotalAmount?: number;
  grandTotalTaxAmount?:	number;
  inquiryRateId?:	string;
  lineItemsDccResponse: Array<OrderLineItem>;
  marginRatePercentage?: string;
}

export interface DccErrorDetails {
  field?: string;
  message?: string;
}
