import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavRoute } from './route';
import { DUMMY_ROUTES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class RoutefetcherService {

  constructor() { }

  getAllRoutes(): Observable<NavRoute[]> {
    return of(DUMMY_ROUTES);
  }

  getRoute(id: number): Observable<NavRoute> {
    return of(DUMMY_ROUTES.find(chk_route => chk_route.id === id))
  }
}
