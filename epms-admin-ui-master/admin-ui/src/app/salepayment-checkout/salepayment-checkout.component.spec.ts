import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepaymentCheckoutComponent } from './salepayment-checkout.component';

describe('SalepaymentCheckoutComponent', () => {
  let component: SalepaymentCheckoutComponent;
  let fixture: ComponentFixture<SalepaymentCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalepaymentCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepaymentCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
