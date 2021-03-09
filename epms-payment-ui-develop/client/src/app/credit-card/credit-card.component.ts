import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {getElementBySelector, removeClass} from '../common/dom-util';
import {faLock, faQuestionCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  Consumer,
  CustomEventName,
  ICssStyleList,
  IFailureResult,
  IFields,
  IPaymentForm,
  IPaymentFormHooks,
  ISessionAuth,
  IStateConfig,
  PaymentCssClassList,
} from '../models/paymentjs-models';
import {GlobalAppData} from '../models/global-app-data';
import {CreditCardService} from '../services/credit-card.service';
import {Contact} from '../models/contact';
import {Address} from '../models/address';
import {CurrencyConversionResponse, Payment} from '../models/payment';
import {PaymentResponse, PaymentResponseStatus, Secure3DAuthType} from '../models/payment-response';
import {PaymentService} from '../services/payment.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {AuthenticationChallengeParams} from '../models/secure-3d-authentication';
import {Transaction} from '../models/transaction';
import {CAProvinces, Countries, USRegions} from '../models/countries-regions';
import {environment} from 'src/environments/environment';
import {getQueryParamByName, updateQueryStringParam} from '../common/utils';
import {SharedService} from '../services/shared.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {MerchantResponseComponent} from '../merchant-response/merchant-response.component';
import {MerchantResponseData} from '../models/merchant-models';
import {ErrorMessageConstants} from '../common/error-messages.constants';
import {LoadingService} from "../services/loading.service";

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})

export class CreditCardComponent implements OnInit, AfterViewInit {
  // tslint:disable: no-input-rename
  @Input('billingDetails') sessionAddressDetails: string;
  countryList: any = Countries;
  regionList: any = USRegions;
  provinceList: any = CAProvinces;
  payButton: HTMLButtonElement;
  faLock = faLock;
  faQuestionCircle = faQuestionCircle;
  show = false;
  secure3dsFormData: SafeHtml;
  authChallengeParams: AuthenticationChallengeParams;
  model: any = {};
  @ViewChild('authChallengeForm') authChallengeFormElement;
  @Input('status') paymentStatus: string;
  @Output() paymentStatusChange = new EventEmitter<boolean>();
  @Input() orderData: Transaction;
  MAX_ALLOWED_ATTEMPTS: number = environment.MAX_PAYMENT_ALLOWED_ATTEMPTS;
  selectedCard = '';
  selectedCountry = '';
  selectedProvince = '';
  selectedRegion = '';
  postalcode = '';
  postalCA = '';
  faTimes = faTimes;
  dccResponse: CurrencyConversionResponse;
  isStubEnabled: boolean;
  urlType: string = null;

  // [0-9a-zA-Z\*\&\$\@\%\'\(\)\#\>\<\?\:\;\|\\\~\!\`\!\+,-\.\s_\/\{\}\[\]&]+$

  regexBuilder = ['0-9', 'a-z', 'A-Z', '\\*', '\\&', '\\$', '\\@', '\\%', '\\\'', '\\(',
    '\\)', '\\>', '\\<', '\\?', '\\!', ':', ';', '/', '\\\\', '"', '\\~', '\\s', '\\*', '\\+' , '\\``', '\\-', '\\_', '\\[', '\\]', '\\}', '\\{', '|'];

  regexPatteren = '[' + this.regexBuilder.join('') + ']+$';


  @ViewChild('dccModal', {static: false}) private dccModal;
  showCvvForCC = true;
  @ViewChild('ccFormData') ccFormFields: NgForm;
  isCcShippingBillingSameChk = false;
  errorMessage = '';
  @Input('disabledPaymentMethodNames') disabledPaymentMethodNames = [];
  defaultError = ErrorMessageConstants.ERROR_DEFAULT_MESSAGE[0].errorMessage;
  orderStatus3ds: string = null;


  @ViewChild(MerchantResponseComponent) merchantResponseComponent;

  constructor(public gd: GlobalAppData,
              private santizer: DomSanitizer,
              private ccService: CreditCardService,
              private paymentService: PaymentService,
              private modalService: NgbModal,
              private sharedService: SharedService,
              private _loading: LoadingService) {
  }
  open(dsmodal) {
    this.modalService.open(dsmodal, { ariaLabelledBy: '3DS Disclaimer' }).result.then(() => { });
  }
  ngOnInit(): void {
    this.isStubEnabled = this.gd.isStubEnabled;

  }

  initialize() {
    if (!this.isStubEnabled) {
      this.payButton = getElementBySelector('[data-submit-btn]');
      this.createAsync(this.getStateConfig(), { preFlowHook: this.requestSession })
        .then((res: any) => this.isErrorMessage(res, 'Create Fields'))
        .then((paymentForm: IPaymentForm) => {
          this.enableForm();
          this.submitCcInfo(paymentForm);
          this.resetCcFields(paymentForm);
        }).catch((reason) => {
        });
    }
    if (this.paymentStatus && this.sessionAddressDetails) {
      if (this.paymentStatus !== 'approved') {
        this.model = JSON.parse(this.sessionAddressDetails);
        this.orderStatus3ds = getQueryParamByName('status');
        if (this.orderStatus3ds?.toLowerCase() !== 'APPROVED'.toLowerCase()) { // 3ds reject
          const data = { status: '3DS'}; // use this in finding errorMessage from ErrorMessageConstants
          this.errorMessage = this.getErrorMessage(data);
        }
        this._loading.setLoading(false,'internal');
      }
    }
  }

  ngAfterViewInit() {
    this.initialize();
    this.onFormChanges();
  }

  // clear error message when any field change detected in the form
  onFormChanges(){
      this.ccFormFields.statusChanges.subscribe( res => {
        if (this.paymentStatus && this.ccFormFields.form.touched){
          this.errorMessage = '';
          this.paymentStatus = null;
        }
      });
  }

  opendcc(dccModal) {
    this.modalService.open(dccModal).result.then((result) => {
    });
  }

  exitdcc(isDccEnabled: boolean): void {
    this.dccResponse = null;
    this.createPayment(isDccEnabled);
  }

  requestSession = (cb: Consumer<ISessionAuth>): void => {
    this.ccService.getCreditCardSessionDetails(this.gd.transId)
      .then((res: ISessionAuth) => this.isErrorMessage(res, 'Authorize Client'))
      .then(cb)
      .catch((err) => {
        this.removeSubmitState();
        if (err.response) {
          if (err.response.data && err.response.data.error) {
          } else {
          }
        } else {
        }
        this._loading.setLoading(false,'internal')
        throw new Error('Session Authorization Error');
      });
  }

  enablePaymentFields = () => {
    const ccFields = window.document.getElementsByClassName('payment-fields');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < ccFields.length; i++) {
      removeClass(ccFields[i], 'disabled');
    }
  }

  enableForm = () => {
    setTimeout(() => {
      if (this.payButton) {
        this.payButton.disabled = false;
        this.enablePaymentFields();
        removeClass(this.payButton, 'disabled-bkg');
      }
    }, 100);
  }

  removeSubmitState(): void {
    if (this.payButton) {
      this.payButton.disabled = false;
      removeClass(this.payButton, 'disabled-bkg');
    }
  }

  setSubmitState(): void {
    if (this.payButton) {
      this.payButton.disabled = true;
    }
  }

  changeRegion(e) {
    this.selectedRegion = e.target.value;
  }

  changeCountry() {
    this.selectedCountry = this.model.country;
  }

  changeProvince(e) {
    this.selectedProvince = e.target.value;
  }

  isErrorMessage(res: any, title: string): any {
    if (res && res.error) {
      this.removeSubmitState();
      if (res.reason) {
      } else if (res.status > 1) {
      }
      throw new Error(`${title} Error`);
    } else {
      // TODO: make fraud service call
      if (title === 'Authorize Client' && this.gd.oscConfig.fraudDetectEnabled) {
        this.ccService.getFraudScore(this.gd.transId);
      }
      return res;
    }
  }

  // TODO: use for reset form on error.
  resetCcFields(paymentForm: IPaymentForm): void {
    paymentForm.reset(() => console.log('called paymentForm.reset'));
  }

  submitCcInfo(paymentForm: IPaymentForm): void {
    const onSuccess = () => {
      this.getDccDetails();
    };

    const onError = (error: Error) => {

      this.removeSubmitState();
    };

    const form = getElementBySelector('#ccForm');
    form.addEventListener('submit', (e: Event) => {

      this._loading.setLoading(true,'internal');
      e.preventDefault();
      if (this.gd.attemptCount > 1 && this.gd.attemptCount <= this.MAX_ALLOWED_ATTEMPTS) {
        this.sharedService.getNewTransactionId(this.gd.transId)
          .then((res: string) => {
            this._loading.setLoading(false,'internal');
            this.gd.transId = res;
            updateQueryStringParam('t', res);
            this.setSubmitState();
            paymentForm.onSubmit(onSuccess, onError);
          }).catch((error) => {
          this._loading.setLoading(false,'internal');

            if (error && error.status && error.error) {
              if (error.status === 400 && error.error === 'No of retries exhausted') {
                this.paymentStatusChange.emit(false);
              }
            }
          });
      } else {
        this.setSubmitState();
        paymentForm.onSubmit(onSuccess, onError);

      }
    });
  }

  private getDccDetails(): void {
    if (this.gd && this.gd.oscConfig && this.gd.oscConfig.dccEnabled && 'subscription' !== this.gd?.sourceType.toLowerCase()) {
      this.ccService.getDccDetails(this.gd.transId)
        .subscribe((result: CurrencyConversionResponse) => {
          this._loading.setLoading(false,'internal');
          if (!result.dccOffered) {
            this.createPayment(false);
          } else {
            this.dccResponse = result;
            this.opendcc(this.dccModal);
          }

        }, (error: any) => {
          this._loading.setLoading(false,'internal');
          this.handleError(error);
        });
    } else {
      this.createPayment(false);
    }
  }

  createPayment(isDccEnabled: boolean): void {
    this.gd?.sourceType.toLowerCase() === 'subscription' ? this.urlType = '/subscription' : this.urlType = '/cc';
    this.paymentService.createPayment(this.getPaymentRequest(isDccEnabled), this.gd.transId, this.urlType)
      .subscribe((result: PaymentResponse) => {
        if (result.status == '500'){
          this.handleError(result);
        } else {
          this.processPaymentResponse(result);
        }

        this.gd.attemptCount += 1;
      }, (error: any) => {
        this.handleError(error);
      });
  }

  handleError(error: any) {

    this.gd.attemptCount += 1;
    if (error && error.status === 424) {
      this.handleCcDecline({ attemptCounter: this.gd.attemptCount });
    } else {
      this.paymentStatus = 'paymentError';
      this.errorMessage = this.getErrorMessage(error);
      if (this.gd.attemptCount > this.MAX_ALLOWED_ATTEMPTS) {
        this.redirectToMerchantErorURL({});
      }
    }

  }

  onCardType = (paymentForm: IPaymentForm) => {
    paymentForm.on(CustomEventName.CARD_TYPE, (res: any) => {
    });
  }

  getStateConfig(): IStateConfig {
    const styles: ICssStyleList = {
      input: {
        'font-size': '14px',
        color: '#00a9e0',
        'font-family': 'Open Sans',
        background: 'black',
      },
      '.card': {
        'font-family': 'Open Sans',
      },
      ':focus': {
        color: '#00a9e0',
      },
      '.valid': {
        color: '#43B02A',
      },
      '.invalid': {
        color: '#C01324',
      },
      '@media screen and (max-width: 700px)': {
        input: {
          'font-size': '14px',
        },
        'input:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0 50px white inset',
        },
        'input:focus:-webkit-autofill': {
          '-webkit-text-fill-color': '#00a9e0',
        },
        'input.valid:-webkit-autofill': {
          '-webkit-text-fill-color': '#43B02A',
        },
        'input.invalid:-webkit-autofill': {
          '-webkit-text-fill-color': '#C01324',
        },
        'input::placeholder': {
          color: '#aaa',
        },
      }
    };

    const classes: PaymentCssClassList = {
      empty: 'empty',
      focus: 'focus',
      invalid: 'invalid',
      valid: 'valid',
    };

    const fields: IFields = {
      card: {
        selector: '[data-cc-card]',
      },
      cvv: {
        selector: '[data-cc-cvv]',
      },
      exp: {
        selector: '[data-cc-exp]',
      },
      name: {
        selector: '[data-cc-name]',
        placeholder: 'Full Name',
      }
    };

    return { classes, fields, styles };
  }

  createAsync(config: IStateConfig, hooks: IPaymentFormHooks) {
    const logger = (level: string, msg: string) => console.log(msg);
    return new Promise<IPaymentForm>((resolve: Consumer<IPaymentForm>, reject: Consumer<IFailureResult>) => {
      try {
        (window as any).firstdata.createPaymentForm(config, hooks, resolve, logger);
      } catch (error) {
        reject({ error: true, reason: error.message });
      }
    });
  }

  /* address reusaable component.
   userAddressDetails(addressDetails: any) {
     this.model.address = addressDetails;
   } */
  private getPaymentRequest(isDccOpted: boolean): Payment {
    const request = {} as Payment;
    // prepare address and assign to order
    const billingAdress = {} as Address;
    billingAdress.firstName = this.orderData.shippingAddress.firstName;
    billingAdress.lastName = this.orderData.shippingAddress.lastName;
    billingAdress.addressLine1 = this.model.streetAddress1;
    billingAdress.addressLine2 = this.model.streetAddress2;
    billingAdress.city = this.model.city;
    billingAdress.company = this.model.company;
    billingAdress.country = this.model.country;
    billingAdress.postalCode = this.model.postalcode;
    billingAdress.region = this.model.region;
    // assign both billing and shipping address here
    request.billingAddress = billingAdress;

    // prepare contact and assign to order
    const bContact = {} as Contact;
    if (this.model.email) {
      bContact.email = this.model.email;
    }
    if (this.model.phone) {
      bContact.phoneNumber = this.model.phone;
    }
    // assign both shipping and billing contact here
    if (bContact) {
      request.billingContact = bContact;
    }
    request.dccOpted = isDccOpted;
    request.cardType = this.model.cardType;
    this.gd.address = JSON.stringify(this.model);
    return request;
  }

  sameadrchkchange(evt): void {
    if (evt.target.checked) {
      this.model.streetAddress1 = this.orderData.shippingAddress.addressLine1;
      this.model.streetAddress2 = this.orderData.shippingAddress.addressLine2;
      this.model.city = this.orderData.shippingAddress.city;
      this.model.company = this.orderData.shippingAddress.company;
      this.model.country = this.orderData.shippingAddress.country;
      this.model.postalcode = this.orderData.shippingAddress.postalCode;
      this.model.region = this.orderData.shippingAddress.region;
      this.model.phone = this.orderData.shippingContact.phoneNumber;
      this.model.email = this.orderData.shippingContact.email;
      this.changeCountry();
      this.isCcShippingBillingSameChk = true;
    } else {
      this.model = {};
    }
  }

  // this will take the user throught the security challenges.
  private verifyPaymentDetails(response: PaymentResponse): void {
    if (response.secure3DAuthType === Secure3DAuthType.form_3ds) {
      this.secure3dsFormData = this.santizer.bypassSecurityTrustHtml(response.authenticationResponse.methodForm);
      this.get3dsflowStatus();
    } else if (response.secure3DAuthType === Secure3DAuthType.challenge) {
      sessionStorage.setItem('sessionid', btoa(btoa(JSON.stringify(this.gd))));
      this.redirectToAcsServer(response.authChallengeParams);
    }
  }

  private get3dsflowStatus(): void {
    if (this.gd && this.gd?.oscConfig && this.gd?.oscConfig.threeDSEnabled) {
      this.paymentService.retrieve3dsDetails(this.gd.transId)
        .subscribe((result: PaymentResponse) => {
          this.processPaymentResponse(result);
        }, (error: any) => {
        });
    }
  }

  private redirectToAcsServer(challengeParams: AuthenticationChallengeParams): void {
    this.authChallengeParams = challengeParams;
    setTimeout(() => {
      this.authChallengeFormElement.nativeElement.submit();
    }, 100);
  }

  // this will get the response and based on the status performs the next steps to verify the payment.
  private processPaymentResponse(response: PaymentResponse): void {
    const paymentStatus = PaymentResponseStatus[response.status];

    switch (paymentStatus) {
      case 0:
        // this.paymentStatusChange.emit(true);
        this.redirectToMerchantURL(response);
        break;
      case 1:
        this.verifyPaymentDetails(response);
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        this.handleCcDecline(response);
        break;
      default:
        this.paymentStatusChange.emit(true);
        break;
    }
  }

  onAddressKey(value: string): void {
    if (this.sessionAddressDetails && this.paymentStatus) {
      this.model = {};
      this.sessionAddressDetails = null;
      this.paymentStatus = null;
    }
  }

  handleCcDecline(response: PaymentResponse): void {
    if (this.gd.attemptCount < this.MAX_ALLOWED_ATTEMPTS) {
      this.paymentStatus = (response?.fraudDetectionResponse && response?.fraudDetectionResponse !== 'approve') ? 'fraudErrorMsg' : 'declined';
      this.errorMessage = this.getErrorMessage(response);
      this.removeSubmitState();
    } else {
      if (this.gd.attemptCount >= this.MAX_ALLOWED_ATTEMPTS) {
        this.redirectToMerchantRejectURL(response);
      } else {
        this.paymentStatusChange.emit(false);
      }
    }
  }

  getErrorMessage(data: any) {
    let category = '';
    let categoryError = '', fraudError = '', statusError = '';
    for (const index of ErrorMessageConstants.ERROR_CATEGORY){
      if (data?.pgmResponseCode === index.AUTH_RESP_CODE){
        category = index.CATEGORY;
      }
    }
    for (const index of ErrorMessageConstants.ERROR_MESSAGES_CREDITCARD){
      if (category.toLowerCase() === index.errorType.toLowerCase()){// category error
        categoryError = index.errorMessage;
        return categoryError;
      } else if (data?.fraudDetectionResponse){// fraud
          if (data.fraudDetectionResponse.toLowerCase() === 'decline' && index.errorType.toLowerCase() === 'fraud'){
            fraudError = index.errorMessage;
            return fraudError;
          }
      } else if (data?.status && !data?.error) {// declined and status=reject
          if (data.status.toLowerCase() === index.errorType.toLowerCase()) {
            statusError = index.errorMessage;
          }
      } else if (data?.error && index.errorType.toLowerCase() === 'error'){ // error occurred
          return index.errorMessage;
      }
    }
    // return error based on priority
    if (statusError) {
      return statusError;
    } else {
      return this.defaultError;
    }
  }

  getNewTxIdIfRequired() {
    const promise = new Promise((resolve, reject) => {
      if (this.gd.attemptCount > 1 && this.gd.attemptCount <= this.MAX_ALLOWED_ATTEMPTS) {
        this.sharedService.getNewTransactionId(this.gd.transId)
          .then((res: string) => {
            resolve(res);
          }).catch((error) => {
            reject(error);
          });
      } else {
        resolve(null);
      }
    });
    return promise;
  }

  submitStubForm(formData: NgForm): void {
    this.getNewTxIdIfRequired().then((res: string) => {
      if (res) {
        this.gd.transId = res;
        updateQueryStringParam('t', res);
      }
      this._submitStubForm(formData);

    }).catch(error => {
      if (error && error.status && error.error) {
        if (error.status === 400 && error.error === 'No of retries exhausted') {
          this.paymentStatusChange.emit(false);
        }
      }
    });
  }

  _submitStubForm(formData: NgForm): void {
    const ccFormData = formData.value;
    const ccExpiryDate = ccFormData.stubExpDate.trim();
    const reqBody = {
      name: ccFormData.stubCcName,
      cardNumber: ccFormData.stubCardNumber,
      cvv: ccFormData.stubCvv,
      expiryDate: ccExpiryDate,
      transactionId: this.gd.transId
    };
    this._loading.setLoading(true,'internal');
    this.ccService.postCcDetailsToStub(this.gd.transId, reqBody).subscribe((res: boolean) => {
      this._loading.setLoading(false,'internal');
      this.getDccDetails();


    }, (error: any) => {
      this._loading.setLoading(false,'internal');
    });
  }

  redirectToMerchantURL(response: PaymentResponse): void {
    let merchantSuccessURL;
    if (this.orderData && this.orderData.order) {
      merchantSuccessURL = this.orderData.order.merchantSuccessURL;
    }

    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.successUrl;
    }
    this.redirectToMerchant(merchantSuccessURL, response);
  }

  redirectToMerchantRejectURL(response: PaymentResponse): void {

    let merchantSuccessURL = this.orderData.order.merchantRejectURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.rejectUrl;
    }

    this.redirectToMerchant(merchantSuccessURL, response);
  }

  redirectToMerchantErorURL(response: PaymentResponse): void {

    let merchantSuccessURL = this.orderData.order.merchantErrorURL;
    if (!merchantSuccessURL) {
      merchantSuccessURL = this.gd.oscConfig.errorUrl;
    }

    this.redirectToMerchant(merchantSuccessURL, response);
  }


  redirectToMerchant(url: string, response: PaymentResponse): void {


    const paymentActionData = {
      url,
      orderTransaction: this.orderData,
      paymentResponse: response,
    } as MerchantResponseData;
    // router.ts create api

    this.merchantResponseComponent.sendResponseToMerchant('CC', paymentActionData);
  }

  isShowCvv(): boolean {
    if (this.orderData && this.gd && this.gd.oscConfig && this.model.cardType) {
      const oscConfig = this.gd.oscConfig;
      if (this.orderData.modeOfReceipt === 'M' || this.orderData.modeOfReceipt === 'F') {
        return false;
      }
    }
    return true;
  }
  onCardTypeChange(value): void {
    // reset cc fields except cardType
    this.selectedCard = this.model.cardType;
    for (const ctrl in this.ccFormFields.controls) {
      if (this.ccFormFields.controls.hasOwnProperty(ctrl) && ctrl !== 'cardType') {
        if (this.ccFormFields.controls[ctrl].value) {
          this.ccFormFields.controls[ctrl].reset();
        }
      }
    }
    this.paymentStatus = null; // clear the error message div on UI

    if (this.isCcShippingBillingSameChk) {
      this.isCcShippingBillingSameChk = false;
    }
    if (this.gd && this.gd && this.gd.oscConfig) {
      const oscConfig = this.gd.oscConfig;
      switch (value) {
        case '001':
          this.showCvvForCC = oscConfig.visaCSCRequired;
          break;
        case '002':
          this.showCvvForCC = oscConfig.mastercardCSCRequired;
          break;
        case '003':
          this.showCvvForCC = oscConfig.amexCSCRequired;
          break;
        case '007':
          this.showCvvForCC = oscConfig.jcbCSCRequired;
          break;
        case '004':
          this.showCvvForCC = oscConfig.discoveryCSCRequired;
          break;
        case '006':
          this.showCvvForCC = oscConfig.unionPayCSCRequired;
          break;
        case '005':
          this.showCvvForCC = oscConfig.dinersClubCSCRequired;
          break;
        case '008':
          this.showCvvForCC = oscConfig.rupayGlobalCSCRequired;
          break;
        default:
          this.showCvvForCC = false;
          break;
      }
    }
  }

  showOption(val: string): boolean {
    return this.disabledPaymentMethodNames.indexOf(val) === -1;
  }

}
