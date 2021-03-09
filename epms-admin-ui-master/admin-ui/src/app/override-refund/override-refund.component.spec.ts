import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrideRefundComponent } from './override-refund.component';

describe('OverrideRefundComponent', () => {
  let component: OverrideRefundComponent;
  let fixture: ComponentFixture<OverrideRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverrideRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverrideRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
