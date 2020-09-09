import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from './vehicle';
import { DUMMY_VEHICLES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class FleetfetcherService {

  constructor() { }

  getAllFleet(): Observable<Vehicle[]> {
    return of(DUMMY_VEHICLES);
  }

  getVehicle(rego: string): Observable<Vehicle> {
    return of(DUMMY_VEHICLES.find(chk_vehicle => chk_vehicle.rego === rego));
  }
}
