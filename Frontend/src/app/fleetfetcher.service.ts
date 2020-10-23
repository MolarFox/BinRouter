import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle, VehicleDepotResponse } from './vehicle';
import { Depot, jsonToDepots } from './depot';
import { DUMMY_VEHICLES, DUMMY_DEPOTS } from './mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { catchError, map } from 'rxjs/operators';
import { handleError } from './httpHelpers';

@Injectable({
  providedIn: 'root'
})
// Service to handle fetching of fleet data, and posting of any changes made with editor
export class FleetfetcherService {

  // Use appropriate url based on environment variable
  private fleetUrl = (environment.serviceFetcherModes == 0) ? 'data/vehicles' : 
    'https://raw.githubusercontent.com/MolarFox/BinRouter_JSONTest/main/vehicles1.json';

  // Rudimentary caches
  private depotcache: Depot[]   = undefined; // TODO: implement caching functionality
  private fleetcache: Vehicle[] = undefined; // TODO: implement caching functionality

  constructor(
    private http: HttpClient
  ) { }

  // Fetches all depots
  getAllDepots(): Observable<Depot[]> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_DEPOTS);
    }else{  // HTTP fetch
      if (this.depotcache === undefined){  // not yet fetched, fetch it

      }

      return this.http.get<VehicleDepotResponse>(this.fleetUrl)
      .pipe(
        map(x => jsonToDepots(x.depots)),
        catchError(handleError<Depot[]>('getAllDepots', []))
      )

    }
  }

  // Fetches an individual depot, minimising network traffic
  // Depreciated method - backend modified, no longer works
  getDepot(id: string): Observable<Depot> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_DEPOTS.find(chk_depot => chk_depot.id === id))
    }else{  // HTTP fetch
      if (this.depotcache === undefined){  // not yet fetched, fetch it

      }

      //return of(this.depotcache.find(chk_depot => chk_depot.id === id));

      // TODO: FIX WITH YI-SONG NEW IMPLEMENTATION (AAAAA??)
      return this.http.get<Depot>(`${this.fleetUrl}/${id}`)
      .pipe(
        catchError(handleError<Depot>(`getDepot id=${id}`))
      )
      
    }
  }

  // Fetches all vehicles in the fleet
  getAllFleet(): Observable<Vehicle[]> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_VEHICLES);
    }else{  // HTTP fetch
      if (this.fleetcache === undefined){  // not yet fetched, fetch it

      }

      return this.http.get<VehicleDepotResponse>(this.fleetUrl)
      .pipe(
        map(x => x.fleetVehicles),
        catchError(handleError<Vehicle[]>('getAllFleet', []))
      )
      
    }
  }

  // Fetches individual vehicle from fleet database
  // As above, this method is now depreciated
  getVehicle(rego: string): Observable<Vehicle> {
    if (environment.serviceFetcherModes === 2){  // fetch from static array
      return of(DUMMY_VEHICLES.find(chk_vehicle => chk_vehicle.rego === rego));
    }else{  // HTTP fetch
      if (this.fleetcache === undefined){  // not yet fetched, fetch it

      }


      // TODO: FIX WITH YI-SONG IMPLEMENTATION
      return this.http.get<Vehicle>(`${this.fleetUrl}/${rego}`)
      .pipe(
        catchError(handleError<Vehicle>(`getVehicle rego=${rego}`))
      )

      //return of(this.fleetcache.find(chk_vehicle => chk_vehicle.rego === rego));

    }
  }

  // Submits any changes to the server and responds with the response
  submitChanges(newchg, modchg, delchg): Observable<any> {
    let output = {
      "fleetVehiclesDelete": delchg,
      "fleetVehiclesCreate": newchg,
      "fleetVehiclesUpdate": modchg
    }
    output.fleetVehiclesCreate.forEach(x => delete x._id);   // id undefined - irrelevant to backend

    return this.http.put<any>(this.fleetUrl, output)
  }
}
