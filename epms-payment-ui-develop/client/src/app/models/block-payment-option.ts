import {Country} from './country';
import {PaymentMethod} from './payment-method';

export interface BlockPaymentOption {

  blokPymtOptId: number;

  hopId: string;

  oscCode: string;

  country: Country;

  paymentMethod: PaymentMethod;
}
