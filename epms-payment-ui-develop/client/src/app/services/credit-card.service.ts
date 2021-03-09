import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ISessionAuth } from '../models/paymentjs-models';
import { CurrencyConversionResponse } from '../models/payment';
import {GlobalAppData} from '../models/global-app-data';
import {Order} from "../models/order";

declare const threatmetrix: any;
@Injectable()
export class CreditCardService {
  paymentUiUrl = environment.PAYMENT_UI;
  constructor(private http: HttpClient,private gd: GlobalAppData) { }
  httpHeaders = {
    headers:  new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCreditCardSessionDetails(orderTranscationId: string): Promise<ISessionAuth> {
    const reqaPrams = {
      sourceType: this.gd.sourceType
    };
    return this.http.get<ISessionAuth>(this.paymentUiUrl + '/epms/token/' + orderTranscationId, {
        headers:  new HttpHeaders({'Content-Type': 'application/json'}),
        params: reqaPrams
    }
      ).toPromise();
  }

  getFraudScore(orderTranscationId: string): void {
    // TODO: Need to pass the org id for the threatmatrix.
    threatmetrix.profile('h.online-metrix.net', 'dm1pufbd', orderTranscationId);
  }

  getDccDetails(orderTranscationId: string) {
    return this.http.get<CurrencyConversionResponse>(this.paymentUiUrl + '/epms/dcc/' + orderTranscationId, this.httpHeaders);
  }

  postCcDetailsToStub(orderTranscationId: string, reqBody: any) {
    return this.http.post<boolean>(this.paymentUiUrl + '/epms/stub/' + orderTranscationId, reqBody, this.httpHeaders);
  }
}
