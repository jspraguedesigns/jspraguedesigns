import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalStubComponent } from './paypalstub.component';

describe('StubComponent', () => {
  let component: PaypalStubComponent;
  let fixture: ComponentFixture<PaypalStubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalStubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
