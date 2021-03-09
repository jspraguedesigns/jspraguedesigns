import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class SharedService {

  constructor(private http: HttpClient) { }

  getNewTransactionId(orderTranscationId: string) {
    return this.http.get<string>(environment.PAYMENT_UI + '/epms/transaction/generate/' + orderTranscationId, {
      headers:  new HttpHeaders({'Content-Type': 'application/json'})
    }).toPromise();
  }
 /* sendMerchantSuccessResponse(data){
    return this.http.post(environment.PAYMENT_UI + '/epms/postback' ,data, {
      headers:  new HttpHeaders({'Content-Type': 'application/json'})
    }).toPromise();
  }*/

}
