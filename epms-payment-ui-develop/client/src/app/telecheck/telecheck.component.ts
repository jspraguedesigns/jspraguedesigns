import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {CAProvinces, Countries, USRegions} from '../models/countries-regions';
import {Transaction} from '../models/transaction';
import {PaymentService} from '../services/payment.service';
import {Payment} from '../models/payment';
import {PaymentResponse, PaymentResponseStatus} from '../models/payment-response';
import {Address} from '../models/address';
import {Contact} from '../models/contact';
import {GlobalAppData} from '../models/global-app-data';
import {environment} from 'src/environments/environment';
import {SharedService} from '../services/shared.service';
import {getQueryParamByName, updateQueryStringParam} from '../common/utils';
import {NgxSpinnerService} from 'ngx-spinner';

import {MerchantResponseComponent} from '../merchant-response/merchant-response.component';
import {MerchantPaymentReq, MerchantResponseData} from "../models/merchant-models";
import {ErrorMessageConstants} from '../common/error-messages.constants';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-telecheck',
  templateUrl: './telecheck.component.html',
  styleUrls: ['./telecheck.component.css']
})
export class TelecheckComponent implements  AfterViewInit{
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  bnkAccModel: any = [];
  countryList: any = Countries;
  regionList: any = USRegions;
  provinceList: any = CAProvinces;
  faLock = faLock;
  @Input() orderData: Transaction;
  selectedAccountType = '';
  selectedCheckType = '';
  enablePaymentButton = true;
  consentText: string = null;
  urlType: string = null;
  accountType: string = null;
  sourceType: string = null;
  selectedCountry = '';
  selectedProvince = '';
  selectedRegion = '';
  @Output() paymentStatusChange = new EventEmitter<boolean>();
  paymentStatus: string;
  MAX_ALLOWED_ATTEMPTS: number = environment.MAX_PAYMENT_ALLOWED_ATTEMPTS;
  fingerprintTransactionId = getQueryParamByName('t');

  @ViewChild(MerchantResponseComponent) merchantResponseComponent;

  @ViewChild('adverseActionDisclosureContent') adverseActionDisclosureContent;

  disableAdverseActionDisclosureContentBtn = true;

  paymentResponse: PaymentResponse;
  errorMessage:string = '';
  defaultError = ErrorMessageConstants.ERROR_DEFAULT_MESSAGE[0].errorMessage;
  @ViewChild('teleFormData') teleFormData: NgForm;

  constructor(private modalService: NgbModal,
              public gd: GlobalAppData,
              private paymentService: PaymentService,
              private sharedService: SharedService,
              private SpinnerService: NgxSpinnerService) { }

  open(content) {
 this.sourceType = this.gd.sourceType.toLowerCase();
    if(this.sourceType === "subscription"){
       this.selectedAccountType === 'S' ? this.accountType ="Savings" :  this.accountType ="Checking";

       this.consentText = `Today, being <strong>${this.monthNames[new Date().getMonth()]} ${new Date().getDate()}</strong>, by providing my bank routing <strong>${this.bnkAccModel.routingNum}</strong>
       and account number <strong>${this.bnkAccModel.accNumber}</strong>, and by checking the box below I, <strong>${this.bnkAccModel.firstName} ${this.bnkAccModel.lastName}</strong> authorize ETS to
       debit my <strong>${this.accountType}</strong> account to make a one-time electronic funds transfer (EFT) or
       draft from my account and, if necessary, to electronically credit my account to correct erroneous debits.
       If my payment returns unpaid, I authorize you or your service provider to collect my payment by EFT(s) or draft(s) from my account.
       I understand the authorization is to remain in full force and effect until ETS has received notification from me
       in such time and such manner as to afford ETS and the financial institution a reasonable opportunity to act on it.</p>`;
       this.modalService.open(content, { ariaLabelledBy: 'Subscription Disclaimer' }).result.then(() => {});


  }else{
      this.consentText = `<p>Today, <strong>${this.monthNames[new Date().getMonth()]} ${new Date().getDate()}</strong>, by checking the box below I, <strong>${this.bnkAccModel.firstName} ${this.bnkAccModel.lastName}</strong>
      hereby authorize ETS to deduct from my checking or savings account indicated below, <strong>$${this.orderData.amount.toFixed(2)}</strong> for payment. I understand the authorization is to remain in full force and
      effect until ETS has received notification from me in such time and such manner as to afford ETS and the financial institution a reasonable opportunity to act on it.</p>`;
      this.modalService.open(content, { ariaLabelledBy: 'Electronic Check Disclaimer' }).result.then(() => {});
  }
}

 // Adverse Action Disclosure
  openAdverseActionDisclosure(): void {
  if(this.gd.sourceType.toLowerCase() === "subscription"){
    this.modalService.open(this.adverseActionDisclosureContent, {ariaLabelledBy: 'Subscription Disclaimer'}).result.then(() => {
    });
  }else{
    this.modalService.open(this.adverseActionDisclosureContent, {ariaLabelledBy: 'Electronic Check Disclaimer'}).result.then(() => {
    });
  }
  }
 ngOnInit(){
  //this.SpinnerService.show();

 }

  ngAfterViewInit() {
    //this.openAdverseActionDisclosure();
    this.onFormChanges();
  }

  //clear error message when any field change detected in the form
  onFormChanges(){
      this.teleFormData.statusChanges.subscribe( res => {
        if(this.paymentStatus && this.teleFormData.form.touched){
          this.errorMessage = '';
          this.paymentStatus = null;
        }
      });
  }

  exit(incomplete) {
    this.modalService.open(incomplete);
  }

  samenamechkchange(evt) {
    if (evt.target.checked) {
      this.bnkAccModel.firstName = this.orderData.shippingAddress.firstName;
      this.bnkAccModel.lastName = this.orderData.shippingAddress.lastName;
    } else {
      this.bnkAccModel.firstName = null;
      this.bnkAccModel.lastName = null;
    }
  }

  sameadrchkchange(evt) {
    if (evt.target.checked) {
      this.bnkAccModel.streetAddress1 = this.orderData.shippingAddress.addressLine1;
      this.bnkAccModel.streetAddress2 = this.orderData.shippingAddress.addressLine2;
      this.bnkAccModel.city = this.orderData.shippingAddress.city;
      this.bnkAccModel.company = this.orderData.shippingAddress.company;
      this.bnkAccModel.country = this.orderData.shippingAddress.country;
      this.bnkAccModel.postalcode = this.orderData.shippingAddress.postalCode;
      this.bnkAccModel.region = this.orderData.shippingAddress.region;
      this.bnkAccModel.phone = this.orderData.shippingContact.phoneNumber;
      this.bnkAccModel.email = this.orderData.shippingContact.email;
      this.changeCountry();
    } else {
      this.bnkAccModel.streetAddress1 = null;
      this.bnkAccModel.streetAddress2 = null;
      this.bnkAccModel.city = null;
      this.bnkAccModel.company = null;
      this.bnkAccModel.country = null;
      this.bnkAccModel.postalcode = null;
      this.bnkAccModel.region = null;
      this.bnkAccModel.phone = null;
      this.bnkAccModel.email = null;
    }
  }

  changeCountry(): void {
    this.selectedCountry = this.bnkAccModel.country;

  }

  selectAccountTypeHandler(event: any): void {
    this.selectedAccountType = event.target.value;
  }

  selectCheckTypeHandler(event: any): void {
    this.selectedCheckType = event.target.value;
  }

  createTeleCheckPayment(urlType:string): void {

    const paymentReq = this.getPaymentRequest();
    this.paymentService.createPayment(paymentReq, this.gd.transId, urlType)
      .subscribe((result: PaymentResponse) => {
        this.processPaymentResponse(result);
        this.gd.attemptCount = this.gd.attemptCount + 1;
      }, (error: any) => {

        this.gd.attemptCount = this.gd.attemptCount + 1;
        this.paymentStatus = 'paymentError';
        this.errorMessage = this.defaultError;

        if(this.gd.attemptCount> this.MAX_ALLOWED_ATTEMPTS) {
          this.merchantResponseComponent.redirectToMerchantErrorURL('TC', {});
        }
      });
  }


  private getPaymentRequest(): Payment {
    const request = {} as Payment;
    // prepare address and assign to order
    const billingAdress = {} as Address;
    billingAdress.firstName = this.bnkAccModel.firstName.trim();
    billingAdress.lastName = this.bnkAccModel.lastName.trim();
    billingAdress.addressLine1 = this.bnkAccModel.streetAddress1;
    billingAdress.addressLine2 = this.bnkAccModel.streetAddress2;
    billingAdress.city = this.bnkAccModel.city;
    billingAdress.company = this.bnkAccModel.company;
    billingAdress.country = this.bnkAccModel.country;
    billingAdress.postalCode = this.bnkAccModel.postalcode;
    billingAdress.region = this.bnkAccModel.region;
    // assign both billing and shipping address here
    request.billingAddress = billingAdress;

    // prepare contact and assign to order
    const bContact = {} as Contact;
    if (this.bnkAccModel.email) {
      bContact.email = this.bnkAccModel.email;
    }
    if (this.bnkAccModel.phone) {
      bContact.phoneNumber = this.bnkAccModel.phone;
    }
    // assign both shipping and billing contact here
    if (bContact) {
      request.billingContact = bContact;
    }
    if (this.bnkAccModel.routingNum && this.bnkAccModel.accNumber) {
      request.accountNumber = this.bnkAccModel.accNumber;
      request.accountType = this.selectedAccountType;
      request.routingNumber = this.bnkAccModel.routingNum;
      request.checkType = this.selectedCheckType;
    }
    if (this.bnkAccModel.chkNumber) {
      request.checkNumber = this.bnkAccModel.chkNumber;
    }
    if (this.consentText) {
      request.consentText = this.consentText;
    }
    // TODO: check with jawed.
    request.achType = 'ICA';
    return request;
  }

  agreeToTermsCondition(evt) {
    evt.target.checked ? (this.enablePaymentButton = false) : (this.enablePaymentButton = true);
  }

  agreeToAdverseActionDisclosure(evt){
    evt.target.checked ? (this.disableAdverseActionDisclosureContentBtn = false) : (this.disableAdverseActionDisclosureContentBtn = true);
  }

  createPayment(): void {
     this.sourceType.toLowerCase() === 'subscription' ? this.urlType = '/subscription' : this.urlType = '/bank'

    if (this.gd.attemptCount > 1 && this.gd.attemptCount <= this.MAX_ALLOWED_ATTEMPTS) {
      this.sharedService.getNewTransactionId(this.gd.transId)
        .then((res: string) => {
          this.gd.transId = res;
          updateQueryStringParam('t', res);
          this.createTeleCheckPayment(this.urlType);
        }).catch((error) => {
        this.enablePaymentButton = true;
        if (error && error.status && error.error) {
          if (error.status === 400) {
            if( 'No of retries exhausted' === error.error){
              this.redirectToMerchantRejectURL({});
            }
            // this.paymentStatusChange.emit(false);
          }
        }
      });
    } else {
      this.createTeleCheckPayment(this.urlType);
    }
  }

  // this will get the response and based on the status performs the next steps to verify the payment.
  private processPaymentResponse(response: PaymentResponse): void {
    this.paymentResponse = response;
    const paymentStatus = PaymentResponseStatus[response.status];
    // this.gd.attemptCount = response.attemptCounter + 1;

      switch (paymentStatus) {
        case 0:
          // this.paymentStatusChange.emit(true);
          this.redirectToMerchantURL(response);
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          this.handleTelecheckDecline(this.gd.attemptCount, this.paymentResponse);
          break;
        default:
          if(paymentStatus == null){ // null == undefined - error like 500
            this.handleTelecheckDecline(this.gd.attemptCount, this.paymentResponse);
          }
          else{
            this.paymentStatusChange.emit(true);
          }
          break;
      }
  }

  handleTelecheckDecline(pmtAttemptCount: number, response: any): void {
    if (pmtAttemptCount < this.MAX_ALLOWED_ATTEMPTS) {
      this.paymentStatus = 'declined';

      if(response?.achResponse?.transactionStatus){
        let achRespone = response.achResponse.transactionStatus;
        if(achRespone === 'NEGATIVE_DECLINE'){
          this.openAdverseActionDisclosure();
          this.paymentStatus = null;
        }else{
          this.errorMessage = this.getErrorMessage(achRespone);
        }
      }else{
        this.errorMessage = this.defaultError;
      }
    } else {
      this.redirectToMerchantRejectURL({});
    }
  }
  getErrorMessage (achRespone: string){
    for(let index of ErrorMessageConstants.ERROR_MESSAGES_TELECHECK){
      if(achRespone.toLowerCase() === index.errorType.toLowerCase() && index.paymentType.toLowerCase() === 'telecheck' ){
        return index.errorMessage;
      }
    }
    return this.defaultError;
  }

  redirectToMerchantErorURL(response: PaymentResponse): void {

    let merchantSuccessURL = this.orderData.order.merchantErrorURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.errorUrl;
    }

    this.redirectToMerchant(merchantSuccessURL, response);
  }

  redirectToMerchantURL(paymentResponse: PaymentResponse): void {

    const paymentReq: MerchantPaymentReq = {

    }
    let merchantSuccessURL = this.orderData.order.merchantSuccessURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.successUrl;
    }
    this.redirectToMerchant(merchantSuccessURL, paymentResponse);
  }

  redirectToMerchantRejectURL(paymentResponse: PaymentResponse): void {

    let merchantSuccessURL = this.orderData.order.merchantRejectURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.rejectUrl;
    }

    this.redirectToMerchant(merchantSuccessURL, paymentResponse);
    // this.openAdverseActionDisclosure();
  }


  redirectToMerchant(url: string, response: PaymentResponse): void {


    const paymentActionData = {
      url: url,
      orderTransaction: this.orderData,
      paymentResponse: response
    } as MerchantResponseData;

    this.merchantResponseComponent.sendResponseToMerchant('TC', paymentActionData);
  }

  closeAdverseActionDisclosure(modal: any): void{
    modal.close();
    this.disableAdverseActionDisclosureContentBtn = true;
  }
}
