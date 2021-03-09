import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { GlobalAppData } from '../models/global-app-data';
import { PaypalService } from '../services/paypal.service';
import { PaypalResponse } from '../models/paypal';
import { SharedService } from '../services/shared.service';
import { environment } from 'src/environments/environment';
import { updateQueryStringParam } from '../common/utils';

import {MerchantResponseComponent} from '../merchant-response/merchant-response.component';
import {MerchantPaymentReq, MerchantResponseData} from '../models/merchant-models';
import {LoadingService} from '../services/loading.service';


declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  MAX_ALLOWED_ATTEMPTS: number = environment.MAX_PAYMENT_ALLOWED_ATTEMPTS;
  paymentStatus: string;
  @ViewChild(MerchantResponseComponent) merchantResponseComponent;

  constructor(private gd: GlobalAppData,
              private paypalService: PaypalService,
              private sharedService: SharedService,
              private _loading: LoadingService) { }

  ngOnInit(): void {
    paypal.Buttons({
      createOrder: (data, actions) => {
        this._loading.setLoading(true,'internal');
        return this.createPaypalOrder().then((orderId: string) => {
          this._loading.setLoading(false,'internal');
          return orderId;
        }).catch((err) => {
          this.paymentStatus = 'paymentError';
          this._loading.setLoading(false,'internal');
          return null;
        });
      },
      onApprove: () => {
        this._loading.setLoading(true,'internal');
        return this.paypalService.capturePaypalOrder(this.gd.transId)
          .then((res: PaypalResponse) => {
            this._loading.setLoading(false,'internal');
            if (res.status === 'COMPLETED') {
              this.redirectToMerchantSuccessURL();
            } else {
              this.handlePaypalDecline(this.gd.attemptCount);
              this.redirectToMerchantRejectURL();
            }
          })
          .catch((err) => {
            this._loading.setLoading(false,'internal');
            this.paymentStatus = 'paymentError';
          });
      },
      onCancel: (data, actions) => {

        this.handlePaypalDecline(this.gd.attemptCount);
      },
      onError: err => {

        this.handlePaypalDecline(this.gd.attemptCount);
      },
      style: {
        layout: 'vertical',
        label: 'paypal',
        color: 'blue',
        shape: 'rect',
        size: 'responsive'
      }
    }).render(this.paypalElement.nativeElement);
  }

  createPaypalOrder(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this.gd.attemptCount > 1 && this.gd.attemptCount <= environment.MAX_PAYMENT_ALLOWED_ATTEMPTS) {
        this.sharedService.getNewTransactionId(this.gd.transId)
          .then((newTransId: string) => {
            this.gd.transId = newTransId;
            updateQueryStringParam('t', newTransId);
            return this.paypalService.getPaypalOrderId(newTransId)
              .then((ppRes: PaypalResponse) => {
                this.gd.attemptCount += 1;
                resolve(ppRes.paypalOrderId);
              })
              .catch((err) => {
                reject(JSON.stringify(err));
              });
          }).catch((error) => {

            if (error && error.status && error.error) {
              if (error.status === 400 && error.error === 'No of retries exhausted') {
                this.redirectToMerchantRejectURL();
              }
            }
            reject(JSON.stringify(error));
          });
      } else {
        return this.paypalService.getPaypalOrderId(this.gd.transId)
          .then((ppRes: PaypalResponse) => {
            this.gd.attemptCount += 1;
            resolve(ppRes.paypalOrderId);
          })
          .catch((err) => {
            reject(JSON.stringify(err));
          });
      }
    });
  }

  handlePaypalDecline(pmtAttemptCount: number): void {
    if (pmtAttemptCount <= this.MAX_ALLOWED_ATTEMPTS) {
      this.paymentStatus = 'declined';
    } else {
      this.redirectToMerchantRejectURL();
    }
  }

  redirectToMerchantSuccessURL(): void {
    const paymentReq: MerchantPaymentReq = {}
    let merchantSuccessURL = this.gd.orderTransaction.order.merchantSuccessURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.successUrl;
    }
    this.redirectToMerchant(merchantSuccessURL);
  }

  redirectToMerchantRejectURL(): void {
    let merchantRejectURL = this.gd.orderTransaction.order.merchantRejectURL;
    if (!merchantRejectURL) {
      merchantRejectURL = this.gd.oscConfig.rejectUrl;
    }
    this.redirectToMerchant(merchantRejectURL);
  }

  redirectToMerchant(url: string): void {
    const paymentActionData = {
      url: url,
      orderTransaction: this.gd.orderTransaction,
      merchantPaymentReq: {},
    } as MerchantResponseData;
    this.merchantResponseComponent.sendResponseToMerchant('PAYPAL', paymentActionData);
  }

}
