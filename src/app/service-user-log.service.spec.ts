import { TestBed } from '@angular/core/testing';

import { ServiceUserLogService } from './service-user-log.service';

describe('ServiceUserLogService', () => {
  let service: ServiceUserLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUserLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
