import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalExternalUserListComponent } from './internal-external-user-list.component';

describe('InternalExternalUserListComponent', () => {
  let component: InternalExternalUserListComponent;
  let fixture: ComponentFixture<InternalExternalUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalExternalUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalExternalUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
