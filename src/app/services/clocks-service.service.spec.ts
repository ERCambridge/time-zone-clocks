import { TestBed } from '@angular/core/testing';

import { ClocksServiceService } from './clocks-service.service';

describe('ClocksServiceService', () => {
  let service: ClocksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClocksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
