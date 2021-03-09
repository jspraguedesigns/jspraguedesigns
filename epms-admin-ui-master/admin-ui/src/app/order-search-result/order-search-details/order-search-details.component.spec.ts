import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSearchDetailsComponent } from './order-search-details.component';

describe('OrderSearchDetailsComponent', () => {
  let component: OrderSearchDetailsComponent;
  let fixture: ComponentFixture<OrderSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
