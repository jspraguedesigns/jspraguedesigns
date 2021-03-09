import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaymentResponse} from '../models/payment-response';
import {MerchantResponseComponent} from './merchant-response.component';
import {GlobalAppData} from "../models/global-app-data";
import {NgxSpinnerService} from "ngx-spinner";
import {OscConfig} from "../models/osc-config";
import {OrderService} from "../services/order.service";
import {of} from "rxjs";
// import {MerchantResponseData} from "../models/paymentjs-models";

describe('MerchantResponseComponent', () => {
  let component: MerchantResponseComponent;
  let fixture: ComponentFixture<MerchantResponseComponent>;

  const orderServiceSpy = jasmine.createSpyObj('OrderService', ['fetchPgResponse']);
  const spinnerServiceSpy = jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);

  const globalAppData = {
    oscConfig: {
      'successUrl': 'testSuccess',
      'rejectUrl': 'testReject',
    } as OscConfig
  } as GlobalAppData;

  beforeEach(async(() => {

    orderServiceSpy.fetchPgResponse.and.returnValue(of({
      orderId: '1'
    }));

    TestBed.configureTestingModule({
      declarations: [MerchantResponseComponent],
      providers: [
        {
          provide: OrderService,
          useValue: orderServiceSpy
        },
        {
          provide: NgxSpinnerService,
          useValue: spinnerServiceSpy
        },
        {
          provide: GlobalAppData,
          useValue: globalAppData
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should sendResponseToMerchant', () => {
  //   expect(component).toBeTruthy();
  //   const merchantResponseData: MerchantResponseData = {
  //     url: 'test'
  //   };
  //   component.sendResponseToMerchant('CC', merchantResponseData);
  //   expect(orderServiceSpy.fetchPgResponse).toHaveBeenCalled();
  // });

  it('should redirectToMerchantSuccessURL', () => {
    expect(component).toBeTruthy();
    const response: PaymentResponse = {} as PaymentResponse;
    component.redirectToMerchantSuccessURL('CC', response);
    expect(orderServiceSpy.fetchPgResponse).toHaveBeenCalled();
  });

  it('should redirectToMerchantRejectURL', () => {
    expect(component).toBeTruthy();
    const response: PaymentResponse = {} as PaymentResponse;
    component.redirectToMerchantRejectURL('CC', response);
    expect(orderServiceSpy.fetchPgResponse).toHaveBeenCalled();
  });

  it('should redirectToMerchantErrorURL', () => {
    expect(component).toBeTruthy();
    const response: PaymentResponse = {} as PaymentResponse;
    component.redirectToMerchantErrorURL('CC', response);
    expect(orderServiceSpy.fetchPgResponse).toHaveBeenCalled();
  });

});
