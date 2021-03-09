import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSaleComponent } from './confirmation-sale.component';

describe('ConfirmationSaleComponent', () => {
  let component: ConfirmationSaleComponent;
  let fixture: ComponentFixture<ConfirmationSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
