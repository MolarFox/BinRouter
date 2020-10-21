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
    'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/routes5.json';

  // Rudimentary cache
  private routecache: NavRoute[] = undefined; // TODO: implement caching functionality

  constructor(
    private http: HttpClient
  ) { }

  getAllRoutes(): Observable<NavRouteResponse> {
      if (this.routecache === undefined){  // not yet fetched, fetch it

      }      
      return this.http.get<NavRouteResponse>(this.routesUrl)
      .pipe(
        catchError(handleError<NavRouteResponse>('getAllRoutes'))
      )
  }
}

/*
// Performs transformations to make our route useable
function convertRawRoot(nav: NavRouteResponse): NavRouteResponse {
  
  // New request field to be added
  let newreqfield = {
    "origin": {
      "location": {}
    },
    "destination": {
      "location": {}
    },
    "travelMode": "DRIVING"
  }
  
  // Rectify all bounds + add request field
  nav.binCollectionSchedules.forEach(x => 
    x.routes.forEach(y => 
      y.directions.forEach(z => {

        // @ts-ignore
        z.request = newreqfield;  // Add request field

        z.routes.forEach(a => {

          // Convert overview polyline into a string
          // @ts-ignore
          a.overview_polyline = a.overview_polyline.points

          // Add converted latlngbounds
          a.bounds = new google.maps.LatLngBounds(
            // @ts-ignore
            a.bounds.southwest,
            // @ts-ignore
            a.bounds.Northeast
          )

        })  

      })  
    )  
  )

  return nav
}
*/
