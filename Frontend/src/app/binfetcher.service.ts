import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bin } from './bin';
import { DUMMY_BINS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class BinfetcherService {

  constructor() { }

  getAllBins(): Observable<Bin[]> {
    return of(DUMMY_BINS);
  }

  getBin(serial: number): Observable<Bin> {
    return of(DUMMY_BINS.find(chk_bin => chk_bin.serial === serial))
  }
}
