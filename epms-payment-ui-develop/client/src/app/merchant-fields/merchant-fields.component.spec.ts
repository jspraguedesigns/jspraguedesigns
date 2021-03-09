import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantFieldsComponent } from './merchant-fields.component';

describe('MerchantFieldsComponent', () => {
  let component: MerchantFieldsComponent;
  let fixture: ComponentFixture<MerchantFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
