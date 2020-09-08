import { TestBed } from '@angular/core/testing';

import { RoutefetcherService } from './routefetcher.service';

describe('RoutefetcherService', () => {
  let service: RoutefetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutefetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
