import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSCHopConfigComponent } from './oschop-config.component';

describe('OSCHopConfigComponent', () => {
  let component: OSCHopConfigComponent;
  let fixture: ComponentFixture<OSCHopConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSCHopConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSCHopConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
