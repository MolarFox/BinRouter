/**
 * Service that performs fetching and posting of bin data
 * 
 * Methods must be adapted to changes in the interface specification. 
 * Note that the method to request individual bins is now outdated below.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bin, BinRaw, BinResponse, jsonToBins, binsToJson } from './bin';
import { DUMMY_BINS } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { catchError, map, tap } from 'rxjs/operators';
import { handleError } from './httpHelpers';

@Injectable({
  providedIn: 'root'
})
export class BinfetcherService {

  // Use appropriate url based on environment variable
  private binsUrl = (environment.serviceFetcherModes === 0) ? 'data/bins' : 
    'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/bins1.json';
    // fetchermode 1 will HTTP fetch from Github raw - see https://github.com/MolarFox/BinRouter_JSONTest*

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

  // Fetches all bins and returns as observable
  getAllBins(): Observable<Bin[]> {
    /**
     * Gets all bin data, sourced from method specified in environment variables
     * @return {Observable<Bin[]>} Observable which resolves to the return data
     */
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_BINS);
    }else{  // HTTP fetch
      if (this.bincache === undefined){  // not yet fetched, fetch it

      }

      // return of(this.binscache);

      return this.http.get<BinResponse>(this.binsUrl)
      .pipe(
        tap(x => {console.log("Bins received:"); console.log(x)}),
        map(x => jsonToBins(x.bins)),
        catchError(handleError<Bin[]>('getAllBins', []))
      )

    }
  }

  // Submits any changes to the server and responds with the response
  submitChanges(newchg, modchg, delchg): Observable<any> {
    /**
     * Submits edits to the server - server will notify of any validation errors through response
     * @param newchg  Array of new bin records
     * @param modchg  Array of modified, existing bin records
     * @param delchg  Array of deleted bin records
     * @return {Observable<any>} Observable containing server response of any failed validation checks
     */
    let output = {
      "dumbBinsDelete": delchg,
      "dumbBinsCreate": binsToJson(newchg),
      "dumbBinsUpdate": binsToJson(modchg)
    }
    output.dumbBinsCreate.forEach(x => delete x._id);   // id undefined - irrelevant to backend
    
    console.log("Bin edits sent:"); console.log(output);  // log for debug purposes
    return this.http.put<any>(this.binsUrl, output)
  }

  /*
  // Depreciated and not used anymore
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
