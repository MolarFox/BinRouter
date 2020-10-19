import { Component, OnInit } from '@angular/core';
import { FleetfetcherService } from '../fleetfetcher.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-view-fleet',
  templateUrl: './view-fleet.component.html',
  styleUrls: ['./view-fleet.component.css']
})
export class ViewFleetComponent implements OnInit {

  // Array of icon names corresponding to the 12 possible icons
  veh_icons = [
    "delete",
    "airport_shuttle",
    "local_shipping",
    "agriculture",
    "electric_car",
    "two_wheeler",
    "electric_bike",
    "pedal_bike",
    "directions_boat",
    "airplanemode_active",
    "rv_hookup",
    "biotech"
  ]

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

  // Triggered whenever user clicks on a vehicle in list view
  vehicleClick(veh: [Vehicle, VehicleExtra]): void {
    // Reset selection of previously selected vehicle
    if (this.selveh !== undefined){
      this.selveh[1].selected = false;
    }

    // Set new selected vehicle
    this.selveh = veh
    this.selveh[1].selected = true;
    
  }

  // Reloads the page
  reloadPage(): void {
    location.reload();
  }

}

interface VehicleExtra {
  rego:     string,
  selected: boolean
}
