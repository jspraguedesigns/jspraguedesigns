import {Component, OnInit, ViewChild} from '@angular/core';

import {Transaction} from '../models/transaction';
import {PaymentResponse} from '../models/payment-response';
import {OrderService} from '../services/order.service';
import {GlobalAppData} from '../models/global-app-data';
import {MerchantResponseData, PaymentActionData} from '../models/merchant-models';
import {LoadingService} from "../services/loading.service";

@Component({
  selector: 'app-merchant-response',
  templateUrl: './merchant-response.component.html',
  styleUrls: ['./merchant-response.component.css']
})
export class MerchantResponseComponent implements OnInit {

  paymentActionData: PaymentActionData;

  orderTx?: Transaction;

  paymentResponse?: PaymentResponse;

  paymentMethodCode?: string;

  pgResponseData?: any;

  redirectType: string;


  actionUrl;
  @ViewChild('paymentActionDataForm') paymentActionDataForm;

  constructor(private odService: OrderService,
              private globalAppData: GlobalAppData, private _loading: LoadingService) {
  }

  ngOnInit(): void {

  }

  sendResponseToMerchant(paymentMethodCode: string, merchantResponseData: MerchantResponseData): void {

    this._loading.setLoading(true, 'internal');
    if (merchantResponseData.url) {

      this.actionUrl = merchantResponseData.url;
      this.fetchPgResponseAndSubmitForm(merchantResponseData);
      this._loading.setLoading(false, 'internal');
    } else {

    }
  }

  fetchPgResponseAndSubmitForm(merchantResponseData: MerchantResponseData): void {
    this._loading.setLoading(true, 'internal');
    const obs = this.odService.fetchPgResponse();
    obs.subscribe((data: string) => {


        this.pgResponseData = this.convertStringToMap(data);
        this._loading.setLoading(false, 'internal');
        this.submitForm();
        this._loading.setLoading(false, 'internal');
      },
      err => {

        this._loading.setLoading(false, 'internal');
      });
  }

  convertStringToMap(data: any): any {
    // construct map for all request fields
    const map: Map<any, any> = new Map<any, any>();
    let jsonObj;
    if (typeof data === 'string') {
      jsonObj = JSON.parse(data as string);
    } else {
      jsonObj = data;
    }

    const keys = Object.keys(jsonObj);
    const values = Object.values(jsonObj);
    for (let i = 0; i <= Object.keys(jsonObj).length; i++) {
      map.set(keys[i], values[i]);
    }
    return map;
  }

  submitForm(): void {
    const timeout = 'PAYPAL' === this.pgResponseData.get('methodOfPayment') ? 3000 : 100;
    this._loading.setLoading(true, 'internal');
    setTimeout(() => {
      const form = this.paymentActionDataForm;

      form.nativeElement.submit();
      this._loading.setLoading(false, 'internal');
    }, timeout);
  }

  getMerchantSuccessURL(pgResponse: any): string {
    let merchantSuccessURL;
    merchantSuccessURL = pgResponse.get('merchantSuccessURL');
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.globalAppData.oscConfig.successUrl;
    }
    return merchantSuccessURL;
  }

  getMerchantRejectURL(pgResponse: any): string {
    let merchantRejectURL;
    merchantRejectURL = pgResponse.get('merchantRejectURL');
    if (!merchantRejectURL) {
      merchantRejectURL = this.globalAppData.oscConfig.rejectUrl;
    }
    return merchantRejectURL;
  }

  getMerchantErrorURL(pgResponse: any): string {
    let merchantErrorURL;
    merchantErrorURL = pgResponse.get('merchantErrorURL');
    if (!merchantErrorURL) {
      merchantErrorURL = this.globalAppData.oscConfig.errorUrl;
    }
    return merchantErrorURL;
  }

  async redirectToMerchantSuccessURL(paymentMethodCode: string, response: PaymentResponse) {

    const obs = await this.odService.fetchPgResponse();
    obs.subscribe((data: string) => {
        this.pgResponseData = this.convertStringToMap(data);
        this.actionUrl = this.getMerchantSuccessURL(this.pgResponseData);
        this._loading.setLoading(false, 'internal');
        this.submitForm();
      },
      err => {
        this._loading.setLoading(false, 'internal');
      });
  }

  redirectToMerchantRejectURL(paymentMethodCode: string, response: PaymentResponse): void {
    const obs = this.odService.fetchPgResponse();
    obs.subscribe((data: string) => {
        this.pgResponseData = this.convertStringToMap(data);
        this.actionUrl = this.getMerchantRejectURL(this.pgResponseData);
        if (this.redirectType === 'backToOrder') {
          // with a reason code of “502” and message "Customer return requested"
          this.pgResponseData.set('pgmResponseCode', '502');
          this.pgResponseData.set('pgmResponseMessage', 'Customer return requested');
          this.pgResponseData.set('decision', 'reject');
        }
        this._loading.setLoading(false, 'internal');
        this.submitForm();
      },
      err => {
        this._loading.setLoading(false, 'internal');
      });
  }

  redirectToMerchantErrorURL(paymentMethodCode: string, response: PaymentResponse): void {
    const obs = this.odService.fetchPgResponse();
    obs.subscribe((data: string) => {
        this.pgResponseData = this.convertStringToMap(data);
        this.actionUrl = this.getMerchantErrorURL(this.pgResponseData);
        this._loading.setLoading(false, 'internal');
        this.submitForm();
      },
      err => {
        this._loading.setLoading(false, 'internal');
      });
  }

  backToOrder(paymentMethodCode: string, response: PaymentResponse) {

    this.redirectType = 'backToOrder';
    this.redirectToMerchantRejectURL(paymentMethodCode, response);

  }


}

