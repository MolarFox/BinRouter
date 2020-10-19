import { Component, OnInit } from '@angular/core';
import { FleetfetcherService } from '../fleetfetcher.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-view-fleet',
  templateUrl: './view-fleet.component.html',
  styleUrls: ['./view-fleet.component.css']
})
export class ViewFleetComponent implements OnInit {

  all_fleet: [Vehicle, VehicleExtra][] = []; // Array of all vehicles
  selveh: [Vehicle, VehicleExtra]; // currently selected vehicle

  // Editor vars
  subtitle = "Scroll through the list to select a vehicle";

  constructor(private fleetfetcher: FleetfetcherService) { }

  ngOnInit(): void {
    this.fleetfetcher.getAllFleet()
      .subscribe(fleet_in =>
        // add all fetched fleet vehicles to array with a spot for their extra data
        fleet_in.forEach(v =>
          this.all_fleet.push(
            [
              v,
              {
                "rego":     v.rego,
                "selected": false
              }
            ]
          )
        )  
      );
  }

  vehicleClick(veh: [Vehicle, VehicleExtra]): void {
    // Reset selection of previously selected vehicle
    if (this.selveh !== undefined){
      this.selveh[1].selected = false;
    }

    // Set new selected vehicle
    this.selveh = veh
    this.selveh[1].selected = true;
    
  }

}

interface VehicleExtra {
  rego:     string,
  selected: boolean
}
