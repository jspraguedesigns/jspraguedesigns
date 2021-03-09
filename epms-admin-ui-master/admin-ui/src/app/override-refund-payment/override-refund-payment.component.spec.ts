import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrideRefundPaymentComponent } from './override-refund-payment.component';

describe('OverrideRefundPaymentComponent', () => {
  let component: OverrideRefundPaymentComponent;
  let fixture: ComponentFixture<OverrideRefundPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverrideRefundPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverrideRefundPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
