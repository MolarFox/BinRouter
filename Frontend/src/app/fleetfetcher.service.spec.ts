import { TestBed } from '@angular/core/testing';

import { FleetfetcherService } from './fleetfetcher.service';

describe('FleetfetcherService', () => {
  let service: FleetfetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetfetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
