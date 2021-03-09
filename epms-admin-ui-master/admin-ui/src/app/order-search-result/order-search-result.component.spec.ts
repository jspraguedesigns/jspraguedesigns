import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSearchResultComponent } from './order-search-result.component';

describe('OrderSearchResultComponent', () => {
  let component: OrderSearchResultComponent;
  let fixture: ComponentFixture<OrderSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
