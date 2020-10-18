import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavRoute, NavRouteResponse } from './route';
import { DUMMY_ROUTES } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { handleError } from './httpHelpers';

@Injectable({
  providedIn: 'root'
})
export class RoutefetcherService {

  // Use appropriate url based on environment variable
  private routesUrl = (environment.serviceFetcherModes == 0) ? 'data/routes' : 
    'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/routes.json';

  // Rudimentary cache
  private routecache: NavRoute[] = undefined; // TODO: implement caching functionality

  constructor(
    private http: HttpClient
  ) { }

  getAllRoutes(): Observable<NavRoute[]> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_ROUTES);
    }else{  // HTTP fetch
      if (this.routecache === undefined){  // not yet fetched, fetch it

      }      

      return this.http.get<NavRouteResponse>(this.routesUrl)
      .pipe(
        map(x => x.binCollectionRoute),
        catchError(handleError<NavRoute[]>('getAllRoutes', []))
      )

    }
  }
}
