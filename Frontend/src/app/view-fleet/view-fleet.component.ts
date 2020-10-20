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
  orig_fleet: [Vehicle, VehicleExtra][] = []; // Unmodified array of all vehicles
  selveh:     [Vehicle, VehicleExtra]; // currently selected vehicle

  del_vehicles: string[] = [];  // Array of vehicles staged for deletion
  mod_vehicles: Vehicle[] = []; // Array of vehicles to modify with new values
  add_vehicles: Vehicle[] = []; // Array of vehicles to create

  constructor(private fleetfetcher: FleetfetcherService) { }

  ngOnInit(): void {
    this.fleetfetcher.getAllFleet()
      .subscribe(fleet_in =>
        // add all fetched fleet vehicles to array with a spot for their extra data
        fleet_in.forEach(v => {
          this.all_fleet.push(
            [
              v,
              {
                "rego":     v.rego,
                "selected": false
              }
            ]
          )
          this.orig_fleet.push(   // seperate push for more efficient deep copy
            [
              v,
              {
                "rego":     v.rego,
                "selected": false
              }
            ]
          )
        })
      );

    this.fleetfetcher.getAllDepots()
      .subscribe(depots_in => this.all_depots = depots_in)
  }

  // Triggered whenever user clicks on a vehicle in list view
  vehicleClick(veh: [Vehicle, VehicleExtra]): void {
    // Reset selection of previously selected vehicle
    if (this.selveh){
      this.selveh[1].selected = false;
    }

    // Set new selected vehicle
    this.selveh = veh
    this.selveh[1].selected = true;
    
  }

  // triggered whenever user clicks 'delete' on a given vehicle
  vehicleDelete(veh: [Vehicle, VehicleExtra]): void {
    // Is vehicle an exising one? (new vehicles will not have an id assigned)
    if (veh[0]._id){
      // Add vehicle to the deletion array, if not a new vehicle
      this.del_vehicles.push(veh[0]._id);
    }

    // Remove vehicle from the main array
    let remindex = this.all_fleet.findIndex(v => v[0].rego === veh[0].rego);
    this.all_fleet.splice(remindex, 1);
    // Remove from original fleet, to keep all pointers in sync
    if (veh[0]._id) this.orig_fleet.splice(remindex, 1);
    // Remove from new array
    else this.add_vehicles.splice(
      this.add_vehicles.findIndex(v => v.rego === veh[0].rego),
      1);

    // Unset selected vehicle (or next in list)
    if (this.all_fleet.length < 1) this.selveh = undefined;
    else this.vehicleClick(this.all_fleet[Math.max(0, remindex-1)]);
  }

  // triggered whenever user clicks 'new' from the editor view
  vehicleAdd(): void {
    let newrego = regoGen(6);
    let newveh: [Vehicle, VehicleExtra] = [
      {
        "_id":         undefined,
        "rego":       newrego,
        "capacity":   2000,
        "available":  true,
        "icon":       2,
        "homeDepot":  undefined
      },
      {
        "rego": newrego,
        "selected": true
      }
    ]

    this.all_fleet.push(newveh);
    this.add_vehicles.push(newveh[0]);
    this.vehicleClick(newveh);
  }

  // Submits changes to the backend server, or notifies user of issues
  submitChanges(): void {

  }

  // Validates all changes made thus far - true if all pass
  validateChanges(): boolean {
    return true
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

// Adapted from https://stackoverflow.com/a/1349426
function regoGen(length: number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}