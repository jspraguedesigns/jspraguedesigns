import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcFormComponent } from './cc-form.component';

describe('CcFormComponent', () => {
  let component: CcFormComponent;
  let fixture: ComponentFixture<CcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
