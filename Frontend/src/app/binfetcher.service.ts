import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bin } from './bin';
import { DUMMY_BINS } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BinfetcherService {

  // Use appropriate url based on environment variable
  private binsUrl = (environment.serviceFetcherModes === 0) ? 'data/bins' : 
    'https://raw.githubusercontent.com/MolarFox/BinRouter_Backend/master/WasteManagementApp/src/initial_data/dumb_bins.json?token=AB3LVUZSQTX43ZGDQ2GVSM27STWWI';

  // Rudimentary cache
  private binscache: Bin[] = undefined; // TODO: implement caching functionality

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

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      return of(result as T);
    }
  }

  getAllBins(): Observable<Bin[]> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_BINS);
    }else{  // HTTP fetch
      if (this.binscache === undefined){  // not yet fetched, fetch it

      }

      // return of(this.binscache);

      return this.http.get<Bin[]>(this.binsUrl)
      .pipe(
        catchError(this.handleError<Bin[]>('httpReqBins', []))
      )

    }
  }

  getBin(serial: number): Observable<Bin> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_BINS.find(chk_bin => chk_bin.serial === serial))
    }else{  // HTTP fetch
      if (this.binscache === undefined){  // not yet fetched, fetch it
        
      }
      
      //return of(this.binscache.find(chk_bin => chk_bin.serial === serial));

    }
  }
}
