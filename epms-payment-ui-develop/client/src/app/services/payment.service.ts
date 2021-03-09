import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Payment} from '../models/payment';
import {PaymentResponse} from '../models/payment-response';
import {GlobalAppData} from '../models/global-app-data';
import { environment } from 'src/environments/environment';

@Injectable()
export class PaymentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  hostUrl = environment.PAYMENT_UI;

  constructor(private http: HttpClient, private gd: GlobalAppData) {
  }

  createPayment(orderRequest: Payment, transactionId: string, paymentType: string): Observable<PaymentResponse> {
    const paymentUrl = this.hostUrl + '/epms/payment/' + transactionId + paymentType;

    return this.http.post<PaymentResponse>(paymentUrl, orderRequest, this.httpOptions);
  }

  retrieve3dsDetails(transactionId: string): Observable<PaymentResponse> {
    return this.http.patch<PaymentResponse>(this.hostUrl + '/epms/3ds/' + transactionId, this.httpOptions);
  }

  getAcsForm(formData: any, postUrl: string): Observable<string> {
    return this.http.post(postUrl, formData, {responseType: 'text'});
  }
}
