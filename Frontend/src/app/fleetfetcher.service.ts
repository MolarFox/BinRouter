import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from './vehicle';
import { Depot } from './depot';
import { DUMMY_VEHICLES, DUMMY_DEPOTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class FleetfetcherService {

  constructor() { }

  getAllDepos(): Observable<Depot[]> {
    return of(DUMMY_DEPOTS);
  }

  getDepot(id: string): Observable<Depot> {
    return of(DUMMY_DEPOTS.find(chk_depot => chk_depot.id === id))
  }

  getAllFleet(): Observable<Vehicle[]> {
    return of(DUMMY_VEHICLES);
  }

  getVehicle(rego: string): Observable<Vehicle> {
    return of(DUMMY_VEHICLES.find(chk_vehicle => chk_vehicle.rego === rego));
  }
}
