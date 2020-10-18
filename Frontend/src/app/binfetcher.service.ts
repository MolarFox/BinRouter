import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bin, BinResponse, jsonToBins } from './bin';
import { DUMMY_BINS } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { catchError, map } from 'rxjs/operators';
import { handleError } from './httpHelpers';

@Injectable({
  providedIn: 'root'
})
export class BinfetcherService {

  // Use appropriate url based on environment variable
  private binsUrl = (environment.serviceFetcherModes === 0) ? 'data/bins' : 
    'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/bins.json';

  // Rudimentary cache
  private bincache: Bin[] = undefined; // TODO: implement caching functionality

  constructor(
    private http: HttpClient
  ) { }

  /*
  private httpReqBins(): void {
    this.binscache = this.http.get<Bin[]>(this.binsUrl).pipe(
      catchError(this.handleError<Bin[]>('httpReqBins', []))
    )
  }
  */

  getAllBins(): Observable<Bin[]> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_BINS);
    }else{  // HTTP fetch
      if (this.bincache === undefined){  // not yet fetched, fetch it

      }

      // return of(this.binscache);

      return this.http.get<BinResponse>(this.binsUrl)
      .pipe(
        map(x => jsonToBins(x.bins)),
        catchError(handleError<Bin[]>('getAllBins', []))
      )

    }
  }


  /*
  getBin(serial: number): Observable<Bin> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_BINS.find(chk_bin => chk_bin.serial === serial))
    }else{  // HTTP fetch
      if (this.bincache === undefined){  // not yet fetched, fetch it
        
      }

      return this.http.get<Bin>(`${this.binsUrl}/${serial}`)
      .pipe(
        catchError(handleError<Bin>(`getBin serial=${serial}`))
      )

      //return of(this.binscache.find(chk_bin => chk_bin.serial === serial));

    }
  }
  */
}
