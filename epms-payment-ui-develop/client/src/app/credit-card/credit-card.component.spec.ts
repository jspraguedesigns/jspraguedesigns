import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerService} from 'ngx-spinner';
import {of, throwError} from 'rxjs';
import {GlobalAppData} from '../models/global-app-data';
import {OscConfig} from '../models/osc-config';
import {CreditCardService} from '../services/credit-card.service';
import {PaymentService} from '../services/payment.service';
import {SharedService} from '../services/shared.service';
import {Consumer, IPaymentForm, ISessionAuth,} from '../models/paymentjs-models';

import {CreditCardComponent} from './credit-card.component';
import {getElementBySelector} from '../common/dom-util';
import {Transaction} from '../models/transaction';
import {PaymentResponse} from '../models/payment-response';
import {BillingAddress} from "../models/billing-address";
import {ShippingAddress} from "../models/shipping-address";

// Mock class for NgbModalRef
export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve('x'));
}

fdescribe('PaymentDemoComponent', () => {
  let component: CreditCardComponent;
  let fixture: ComponentFixture<CreditCardComponent>;
  const creditCardServiceSpy = jasmine.createSpyObj('CreditCardService', ['getCreditCardSessionDetails', 'getFraudScore',
    'getDccDetails', 'postCcDetailsToStub']);
  const paymentServiceSpy = jasmine.createSpyObj('PaymentService', ['createPayment', 'retrieve3dsDetails']);
  const modalServiceSpy = jasmine.createSpyObj('NgbModal', ['open']);
  const domSanitizerSpy = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);
  const sharedServiceSpy = jasmine.createSpyObj('SharedService', ['getNewTransactionId']);
  const spinnerServiceSpy = jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);
  const oscConfigObj = {
    successUrl: 'testSuccess',
    rejectUrl: 'testReject',
    errorUrl: 'testError'
  } as OscConfig;

  const globalAppData = {
    oscConfig: oscConfigObj
  } as GlobalAppData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CreditCardComponent],
      providers: [
        {
          provide: GlobalAppData,
          useValue: globalAppData
        },
        {
          provide: CreditCardService,
          useValue: creditCardServiceSpy
        },
        {
          provide: PaymentService,
          useValue: paymentServiceSpy
        },
        {
          provide: NgbModal,
          useValue: modalServiceSpy
        },
        {
          provide: DomSanitizer,
          useValue: domSanitizerSpy
        },
        {
          provide: SharedService,
          useValue: sharedServiceSpy
        }, {
          provide: NgxSpinnerService,
          useValue: spinnerServiceSpy
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize when stub disabled', fakeAsync(() => {
    const iPaymentForm = {} as IPaymentForm;
    spyOn(component, 'createAsync').and.returnValue(Promise.resolve(iPaymentForm));
    fixture.detectChanges();
    tick(500);
    expect(component.createAsync).toHaveBeenCalled();
  }));

  xit('should hide spinner when stub enabled', () => {
    component.isStubEnabled = true;
    component.paymentStatus = "True";
    component.sessionAddressDetails = JSON.stringify({});
    fixture.detectChanges();
    expect(spinnerServiceSpy.hide).toHaveBeenCalled();
  });

  it('should work request session', () => {

    creditCardServiceSpy.getCreditCardSessionDetails.and.returnValue(Promise.resolve(true));

    component.requestSession({} as Consumer<ISessionAuth>);
    expect(component).toBeDefined();
    component.payButton = null;

    let errorMsg = {response: {data: {error: 'error'}}};
    creditCardServiceSpy.getCreditCardSessionDetails.and.returnValue(Promise.reject(errorMsg));
    component.requestSession({} as Consumer<ISessionAuth>);
    expect(creditCardServiceSpy.getCreditCardSessionDetails).toHaveBeenCalledTimes(2);

    errorMsg = {response: {data: {error: ''}}};
    creditCardServiceSpy.getCreditCardSessionDetails.and.returnValue(Promise.reject(errorMsg));
    component.requestSession({} as Consumer<ISessionAuth>);
    expect(creditCardServiceSpy.getCreditCardSessionDetails).toHaveBeenCalledTimes(3);

    errorMsg = {response: null};
    creditCardServiceSpy.getCreditCardSessionDetails.and.returnValue(Promise.reject(errorMsg));
    component.requestSession({} as Consumer<ISessionAuth>);
    expect(creditCardServiceSpy.getCreditCardSessionDetails).toHaveBeenCalledTimes(4);
  });

  it('should submit cc info', () => {
    component.gd = {} as GlobalAppData;
    component.gd.sourceType = 'subscription';
    component.orderData = {
      shippingAddress: {
        firstName: 'firstName',
        lastName: 'lastName'
      }
    } as Transaction;
    component.model = {
      streetAddress1: 'streetAddress1',
      streetAddress2: 'streetAddress2',
      city: 'city',
      company: 'company',
      country: 'country',
      postalcode: 'postalcode',
      region: 'region',
      email: 'email',
      phone: 'phone'
    }

    fixture.detectChanges();
    const btn = document.createElement("BUTTON")
    component.payButton = btn as HTMLButtonElement;
    component.payButton.disabled = true;
    component.payButton.classList.add('disabled-bkg');
    const error = {} as Error;
    const iPaymentForm = {
      onSubmit: function (parm1, parm2) {
        parm1();
        parm2(error);
      }
    } as IPaymentForm;
    let count = 0;
    component.merchantResponseComponent = {
      sendResponseToMerchant: function (parm1, parm2) {
        count++;
      }
    }

    component.submitCcInfo(iPaymentForm);
    let resp = {} as PaymentResponse;
    resp.status = 'APPROVED';
    paymentServiceSpy.createPayment.and.returnValue(of(resp));
    const form = getElementBySelector('#ccForm');
    form.dispatchEvent(new Event('submit'));
    expect(paymentServiceSpy.createPayment).toHaveBeenCalled();

    resp = {} as PaymentResponse;
    resp.status = 'WAITING';
    paymentServiceSpy.createPayment.and.returnValue(of(resp));
    form.dispatchEvent(new Event('submit'));
    expect(paymentServiceSpy.createPayment).toHaveBeenCalledTimes(2);

    resp = {} as PaymentResponse;
    resp.status = 'FAILED';
    paymentServiceSpy.createPayment.and.returnValue(of(resp));
    form.dispatchEvent(new Event('submit'));
    expect(paymentServiceSpy.createPayment).toHaveBeenCalledTimes(3);

    resp = {} as PaymentResponse;
    resp.status = 'Test';
    paymentServiceSpy.createPayment.and.returnValue(of(resp));
    form.dispatchEvent(new Event('submit'));
    expect(paymentServiceSpy.createPayment).toHaveBeenCalledTimes(4);

    expect(count).toBe(1);
    expect(component.payButton.disabled).toBeFalsy();

    component.gd.attemptCount = 2;
    component.MAX_ALLOWED_ATTEMPTS = 3;
    sharedServiceSpy.getNewTransactionId.and.returnValue(Promise.resolve('123'));
    form.dispatchEvent(new Event('submit'));
    expect(sharedServiceSpy.getNewTransactionId).toHaveBeenCalled();
  });

  it('should open modal', () => {
    let mockModalRef: MockNgbModalRef = new MockNgbModalRef();
    modalServiceSpy.open.and.returnValue(mockModalRef);
    component.open({});
    expect(modalServiceSpy.open).toHaveBeenCalled();
    component.opendcc({});
    expect(modalServiceSpy.open).toHaveBeenCalledTimes(2);
  });

  it('should call error on exit dcc service error', () => {
    component.gd = {} as GlobalAppData;
    component.gd.sourceType = 'subscription';
    paymentServiceSpy.createPayment.and.returnValue(throwError('error'));
    component.gd.attemptCount = 2;
    component.MAX_ALLOWED_ATTEMPTS = 1;
    component.orderData = {
      shippingAddress: {
        firstName: 'firstName',
        lastName: 'lastName'
      }, order: {merchantErrorURL: 'http://error-url'}
    } as Transaction;
    spyOn(component, 'redirectToMerchant');
    component.exitdcc(false);
    expect(component.redirectToMerchant).toHaveBeenCalled();
  });

  it('should create payment', () => {
    const resp = {} as PaymentResponse;
    resp.status = '10';
    component.orderData = {} as Transaction;
    component.orderData.billingAddress = {} as BillingAddress;
    component.orderData.shippingAddress = {} as ShippingAddress;
    component.model = {} ;
    component.gd = {} as GlobalAppData;
    component.gd.sourceType = 'subscription';
    paymentServiceSpy.createPayment.and.returnValue(of(resp));
    component.createPayment(false);
    expect(paymentServiceSpy.createPayment).toHaveBeenCalled();

  });


});
