/**
 * Service that performs fetching of route data
 * 
 * Note that due to difficulties in aligning the available gmaps responses
 * to that expected by the renderer, there have been a number of major modifications to the way
 * route data is sent by the backend and processed here in the frontend.
 * In particular, see the routeview ts file for info on how routes are currently 
 * being processed and rendered.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavRoute, NavRouteResponse } from './route';
import { DUMMY_ROUTES } from './mock-data'; // This can be deleted now
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { handleError } from './httpHelpers';

@Injectable({
  providedIn: 'root'
})
// Service performs fetching of routes
export class RoutefetcherService {

  // Use appropriate url based on environment variable
  private routesUrl = (environment.serviceFetcherModes == 0) ? 'data/routes' : 
    'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/routes5.json';
    // fetchermode 1 will HTTP fetch from Github raw - see https://github.com/MolarFox/BinRouter_JSONTest*

  // Rudimentary cache
  private routecache: NavRoute[] = undefined; // TODO: implement caching functionality

  constructor(
    private http: HttpClient
  ) { }

  // Fetches the routes if not already cached, returns observable for HTTP response
  getAllRoutes(): Observable<NavRouteResponse> {
    /**
     * Gets all route data, sourced from method specified in environment variables
     * @return {Observable<NavRouteResponse>} Observable which resolves to the return data
     */
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
