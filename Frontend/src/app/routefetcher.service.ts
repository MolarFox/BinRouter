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
  private routesUrl = 'data/routes' ? (environment.serviceFetcherModes == 0) : 
    ''; // TODO: fill github test page for route test data

  constructor(
    private http: HttpClient
  ) { }

  getAllRoutes(): Observable<NavRoute[]> {
    return of(DUMMY_ROUTES);
  }

  getRoute(id: number): Observable<NavRoute> {
    return of(DUMMY_ROUTES.find(chk_route => chk_route.id === id))
  }
}
