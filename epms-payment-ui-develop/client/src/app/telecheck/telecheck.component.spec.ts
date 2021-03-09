import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TelecheckComponent} from './telecheck.component';
import {OscConfig} from "../models/osc-config";
import {GlobalAppData} from "../models/global-app-data";
import {PaymentService} from "../services/payment.service";
import {NgxSpinnerService} from "ngx-spinner";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SharedService} from "../services/shared.service";
import {FormsModule} from "@angular/forms";
import {Transaction} from "../models/transaction";
import {PaymentResponse} from "../models/payment-response";
import {Order} from "../models/order";
import {Address} from "../models/address";
import {Contact} from "../models/contact";
import {of} from "rxjs";

describe('TelecheckComponent', () => {
  let component: TelecheckComponent;
  let fixture: ComponentFixture<TelecheckComponent>;

  const modalServiceSpy = jasmine.createSpyObj('NgbModal', ['open']);
  const paymentServiceSpy = jasmine.createSpyObj('PaymentService', ['createPayment']);

  const sharedServiceSpy = jasmine.createSpyObj('SharedService', ['getNewTransactionId']);
  const spinnerServiceSpy = jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);

  const oscConfigObj = {
    successUrl: 'testSuccess',
    rejectUrl: 'testReject'
  } as OscConfig;

  const globalAppData = {
    oscConfig: oscConfigObj
  } as GlobalAppData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelecheckComponent],
      providers: [
        {
          provide: NgbModal,
          useValue: modalServiceSpy
        },
        {
          provide: SharedService,
          useValue: sharedServiceSpy
        },
        {
          provide: PaymentService,
          useValue: paymentServiceSpy
        },
        {
          provide: NgxSpinnerService,
          useValue: spinnerServiceSpy
        },
        {
          provide: GlobalAppData,
          useValue: globalAppData
        }
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  const getOrderObj = () => {
    const shippingAddressObj = {
      addressLine1: 'line1',
      addressLine2: 'line2',
      city: 'city1',
      company: 'company1',
      country: 'country1',
      postalcode: 'postalcode1',
      region: 'region1',
      firstName: 'firstName1',
      lastName: 'lastName1'
    } as Address;

    const shippingContactObj = {
      phoneNumber: 1234567890,
      email: 'test@test.com'
    } as Contact;

    const orderObj = {} as Order;

    const orderData: Transaction = {
      order: orderObj,
      shippingAddress: shippingAddressObj,
      shippingContact: shippingContactObj
    } as Transaction;

    return orderData;
  };

  beforeEach(() => {

    fixture = TestBed.createComponent(TelecheckComponent);
    component = fixture.componentInstance;
    component.orderData = getOrderObj();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should createTeleCheckPayment', () => {

    const result: PaymentResponse = {
      paymentStatus: 0
    } as PaymentResponse;

    paymentServiceSpy.createPayment.and.returnValue(of(result));

    expect(component).toBeTruthy();

    const evt = {
      target: {
        checked: true
      }
    };

    component.samenamechkchange(evt);
    component.sameadrchkchange(evt);

    component.createTeleCheckPayment('');
    expect(paymentServiceSpy.createPayment).toHaveBeenCalled();
  });

});
