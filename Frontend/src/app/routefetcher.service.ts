import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavRoute } from './route';
import { DUMMY_ROUTES } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoutefetcherService {

  // Use appropriate url based on environment variable
  private routesUrl = (environment.serviceFetcherModes == 0) ? 'data/routes' : 
    ''; // TODO: fill github test page for route test data

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

      
    }
  }

  getRoute(id: number): Observable<NavRoute> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_ROUTES.find(chk_route => chk_route.id === id))
    }else{  // HTTP fetch
      if (this.routecache === undefined){  // not yet fetched, fetch it

      }
    }
  }
}
