import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Transaction } from '../models/transaction';
import {Observable, of} from 'rxjs';
import { GlobalAppData } from '../models/global-app-data';
import { getQueryParamByName } from '../common/utils';
import { environment } from 'src/environments/environment';
import {delay, tap, flatMap} from 'rxjs/operators';
import {LoadingService} from './loading.service';
import {ISessionAuth} from '../models/paymentjs-models';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient, private gd: GlobalAppData, private  loadingService: LoadingService) { }

  getOrder(): Observable<Transaction> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const orderId = getQueryParamByName('t');
    this.gd.transId = orderId;
    return this.http.get<Transaction>(environment.PAYMENT_UI + '/epms/order/' + orderId, httpOptions);
  }

  fetchPgResponse(): Observable<string> {
    const httpOptions = {
      observe: 'body' as const,
      responseType: 'text' as const
    };
    const orderId = this.gd.transId ;
    const url = environment.PAYMENT_UI + '/epms/pg/response/' + orderId;
    // return this.http.get(url, {responseType: 'text'});
    // adding delay

    return of(url).pipe(tap((data) => this.loadingService.setLoading(true, data)),
      delay(2000), flatMap(data => this.http.get<string>(url)));
  }
}
