import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { updateQueryStringParam } from 'src/app/common/utils';
import { GlobalAppData } from 'src/app/models/global-app-data';
import { PaypalResponse } from 'src/app/models/paypal';
import { PaypalService } from 'src/app/services/paypal.service';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';
import {MerchantResponseComponent} from '../../merchant-response/merchant-response.component';
import {MerchantPaymentReq, MerchantResponseData} from '../../models/merchant-models';

@Component({
  selector: 'app-paypal-stub',
  templateUrl: './paypalstub.component.html',
  styleUrls: ['./paypalstub.component.css']
})
export class PaypalStubComponent implements OnInit {
  @Output() paymentStatusChange = new EventEmitter<boolean>();
  paymentStatus: string;
  MAX_ALLOWED_ATTEMPTS = environment.MAX_PAYMENT_ALLOWED_ATTEMPTS;
  timerCheck: any;
  orderId: string;
  closeResult = '';
  @ViewChild('modalContent') public modalContentRef: TemplateRef<any>;
  @Input() stubUserChoice: '';
  @ViewChild(MerchantResponseComponent) merchantResponseComponent;
  oscConfig: string;
  amountTotal: number;

  constructor(private modalService: NgbModal,
              private gd: GlobalAppData,
              private paypalService: PaypalService,
              private sharedService: SharedService) {}

  ngOnInit(): void {
    this.oscConfig = this.gd.oscConfig.oscCode;
    this.amountTotal = this.gd.orderTransaction.amount;
  }

  openPaypalPopup(): void {
    this.createPaypalOrder().then((orderId: string) => {
      if (orderId) {
        this.orderId = orderId;
        this.openModal(this.modalContentRef);
      }
      return orderId;
    }).catch((err) => {
      return null;
    });
  }

  openModal(modalContent){
    this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // call PSL service
      const requestBody = {
        payPalOrderId: this.orderId,
        paymentResult: this.stubUserChoice // 'accept' : 'decline'
      };
      this.paypalService.postPaypalStubData(JSON.stringify(requestBody)).then((res: string) => {
        if (JSON.stringify(res) === 'true') {
            this.capturePayPalOrder(JSON.stringify(res));
        }
      }).catch((error) => {
        this.handlePaypalDecline(this.gd.attemptCount);
      });
    }, (reason) => {
      this.handlePaypalDecline(this.gd.attemptCount);
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  capturePayPalOrder(data: any): void {
    try{
        this.paypalService.capturePaypalOrder(this.gd.transId)
        .then((res: PaypalResponse) => {
        if (res.status === 'COMPLETED') {
            // this.paymentStatusChange.emit(true);
          this.redirectToMerchantURL();
            } else {
            this.handlePaypalDecline(this.gd.attemptCount);

            }
        }).catch((err) => {


        });
    }catch (err){

    }
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
                this.paymentStatusChange.emit(false);
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

  redirectToMerchantURL(): void {

    const paymentReq: MerchantPaymentReq = {

    }

    let merchantSuccessURL = this.gd.orderTransaction.order.merchantSuccessURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.successUrl;
    }
    this.redirectToMerchant(merchantSuccessURL);
  }

  redirectToMerchantRejectURL(): void {

    let merchantSuccessURL = this.gd.orderTransaction.order.merchantRejectURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.rejectUrl;
    }

    this.redirectToMerchant(merchantSuccessURL);
  }


  redirectToMerchant(url: string): void {


    const paymentActionData = {
      url: url,
      orderTransaction: this.gd.orderTransaction,
      merchantPaymentReq: {},
    } as MerchantResponseData ;

    this.merchantResponseComponent.sendResponseToMerchant('PAYPAL', paymentActionData);
  }
}
