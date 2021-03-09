import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRefundComponent } from './confirmation-refund.component';

describe('ConfirmationRefundComponent', () => {
  let component: ConfirmationRefundComponent;
  let fixture: ComponentFixture<ConfirmationRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
