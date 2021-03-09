import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemSummaryComponent } from './line-item-summary.component';

describe('LineItemSummaryComponent', () => {
  let component: LineItemSummaryComponent;
  let fixture: ComponentFixture<LineItemSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
