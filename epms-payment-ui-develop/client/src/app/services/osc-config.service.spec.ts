import { TestBed } from '@angular/core/testing';

import { OscConfigService } from './osc-config.service';

describe('OscConfigService', () => {
  let service: OscConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OscConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
