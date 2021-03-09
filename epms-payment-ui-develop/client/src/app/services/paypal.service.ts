import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaypalResponse } from '../models/paypal';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PaypalService {
  paymentUiUrl = environment.PAYMENT_UI;
  constructor(private http: HttpClient) { }

  httpHeaders = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };
  paypalUrl = environment.PAYMENT_UI + '/epms/paypal';

  getPaypalOrderId(orderTranscationId: string): Promise<PaypalResponse> {
    return this.http.get<PaypalResponse>(this.paypalUrl + '/order/' + orderTranscationId, this.httpHeaders).toPromise();
  }

  capturePaypalOrder(orderTranscationId: string): Promise<PaypalResponse> {
    return this.http.get<PaypalResponse>(this.paypalUrl + '/capture/' + orderTranscationId, this.httpHeaders).toPromise();
  }

  postPaypalStubData(reqBody: any) {
    return this.http.post<any>(this.paypalUrl + '/stub', reqBody, this.httpHeaders).toPromise();
  }
}
