import { Component, OnInit } from '@angular/core';
import { FleetfetcherService } from '../fleetfetcher.service';
import { Vehicle } from '../vehicle';
import { Depot } from '../depot';

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

  all_depots: Depot[];    // Array of all depots
  all_fleet:  [Vehicle, VehicleExtra][] = []; // Array of all vehicles
  selveh:     [Vehicle, VehicleExtra]; // currently selected vehicle

  del_vehicles: string[] = [];  // Array of vehicles staged for deletion
  mod_vehicles: Vehicle[] = []; // Array of vehicles to modify with new values
  add_vehicles: Vehicle[] = []; // Array of vehicles to create

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

    this.fleetfetcher.getAllDepots()
      .subscribe(depots_in => this.all_depots = depots_in)
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

  // triggered whenever user clicks 'delete' on a given vehicle
  vehicleDelete(veh: [Vehicle, VehicleExtra]): void {
    // Add vehicle to the deletion array
    this.del_vehicles.push(this.selveh[0].id);

    // Remove vehicle from the array
    let remindex = this.all_fleet.findIndex(v => v[0].id === this.selveh[0].id);
    this.all_fleet.splice(remindex, 1);

    // Unset selected vehicle
    this.selveh = undefined;
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