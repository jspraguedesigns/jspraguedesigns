import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcRefundComponent } from './cc-refund.component';

describe('CcRefundComponent', () => {
  let component: CcRefundComponent;
  let fixture: ComponentFixture<CcRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
