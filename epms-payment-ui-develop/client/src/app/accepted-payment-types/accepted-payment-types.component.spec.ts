import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPaymentTypesComponent } from './accepted-payment-types.component';

describe('AcceptedPaymentTypesComponent', () => {
  let component: AcceptedPaymentTypesComponent;
  let fixture: ComponentFixture<AcceptedPaymentTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedPaymentTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedPaymentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
