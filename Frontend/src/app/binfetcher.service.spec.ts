import { TestBed } from '@angular/core/testing';

import { BinfetcherService } from './binfetcher.service';

describe('BinfetcherService', () => {
  let service: BinfetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinfetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
