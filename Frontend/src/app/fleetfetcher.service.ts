import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from './vehicle';
import { Depot } from './depot';
import { DUMMY_VEHICLES, DUMMY_DEPOTS } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FleetfetcherService {

  // Use appropriate url based on environment variable
  private fleetUrl = 'data/vehicles' ? (environment.serviceFetcherModes == 0) : 
    'https://raw.githubusercontent.com/MolarFox/BinRouter_Backend/master/WasteManagementApp/src/initial_data/fleet_vehicles.json?token=AB3LVUZAZOPNKBCN5WQATIC7STWHE';

  constructor(
    private http: HttpClient
  ) { }

  getAllDepos(): Observable<Depot[]> {
    return of(DUMMY_DEPOTS);
  }

  getDepot(id: number): Observable<Depot> {
    return of(DUMMY_DEPOTS.find(chk_depot => chk_depot.id === id))
  }

  getAllFleet(): Observable<Vehicle[]> {
    return of(DUMMY_VEHICLES);
  }

  getVehicle(rego: string): Observable<Vehicle> {
    return of(DUMMY_VEHICLES.find(chk_vehicle => chk_vehicle.rego === rego));
  }
}
