import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecheckComponent } from './telecheck.component';

describe('TelecheckComponent', () => {
  let component: TelecheckComponent;
  let fixture: ComponentFixture<TelecheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
