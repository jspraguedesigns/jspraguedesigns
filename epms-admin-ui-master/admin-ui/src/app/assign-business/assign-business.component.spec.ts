import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignBusinessComponent } from './assign-business.component';

describe('AssignBusinessComponent', () => {
  let component: AssignBusinessComponent;
  let fixture: ComponentFixture<AssignBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
