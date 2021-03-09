import { TestBed } from '@angular/core/testing';

import { EpmsAppService } from './epms-app.service';

describe('EpmsAppService', () => {
  let service: EpmsAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpmsAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
