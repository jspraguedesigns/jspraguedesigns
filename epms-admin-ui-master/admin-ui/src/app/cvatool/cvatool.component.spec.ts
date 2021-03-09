import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVAToolComponent } from './cvatool.component';

describe('CVAToolComponent', () => {
  let component: CVAToolComponent;
  let fixture: ComponentFixture<CVAToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVAToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVAToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
