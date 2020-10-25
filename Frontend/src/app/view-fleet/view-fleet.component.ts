/**
 * Fleet view / editor ts file
 * 
 * Handles all logic for the fleet viewer and editor,
 * most importantly handles sending of requests to backend and
 * validation of these edits.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { Component, Input, OnInit } from '@angular/core';
import { FleetfetcherService } from '../fleetfetcher.service';
import { Vehicle } from '../vehicle';
import { Depot } from '../depot';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material/select';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-view-fleet',
  templateUrl: './view-fleet.component.html',
  styleUrls: ['./view-fleet.component.css']
})
export class ViewFleetComponent implements OnInit {

  // Array of icon names corresponding to the 12 possible icons
  // Each string corresponds to icon in material design library
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

  constructor(
    private fleetfetcher: FleetfetcherService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
    ) { }

  // Loads live array (data the editor sees), and deep copy into backup array
  // Modifications are determined by comparing live array with backup before edit submission
  ngOnInit(): void {
    /**
     * Called when the page has initialised fully
     * @return {null}
     */
    this.fleetfetcher.getAllFleet()
      .subscribe(fleet_in =>
        // add all fetched fleet vehicles to array with a spot for their extra data
        fleet_in.forEach(v => {
          this.all_fleet.push(
            [
              JSON.parse(JSON.stringify(v)),  // deep copy of all values
              {
                "rego":     v.rego,
                "selected": false
              }
            ]
          )
          // add all vehicles to backup array
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
    
    // Collect info about loc of all depots 
    // (since routing view is nested, this call with need no network action)
    this.fleetfetcher.getAllDepots()
      .subscribe(depots_in => this.all_depots = depots_in);
    console.log(`Fleet view loaded at time ${new Date()}`);
  }

  // Triggered whenever user clicks on a vehicle in list view
  vehicleClick(veh: [Vehicle, VehicleExtra]): void {
    /**
     * Called whenever a vehicle is clicked in the RHS edit sidebar
     * Sets that vehicle to be the active vehicle, and updates the internal param
     * of it and the previously active vehicle as such (used by editor for button style rendering)
     */
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
    /**
     * Delete the specified vehicle - only gets tracked if the 
     * deleted vehicle was a pre-exising one, not one newly added in this edit session
     * @param {[Vehicle, VehicleExtra]} veh the specified vehicle to delete
     * @return {void}
     */
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
    /**
     * Create a new vehicle with a random VIN, set it as the active vehicle
     * Also track it in the new vehicles array for later posting of edits to backend
     * @return {void}
     */
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

    // Add vehicle to live view, to new vehicles array, and make it selected
    this.all_fleet.push(newveh);
    this.add_vehicles.push(newveh[0]);
    this.vehicleClick(newveh);
  }

  // Submits changes to the backend server, or notifies user of issues
  // THIS IS INCOMPLETE AND I'M NO LONGER USING IT, IN FAVOR OF SNACKBAR BELOW
  openDialogue(): void {
    /**
     * [Depreciated] will open a dialogue popup
     * Intended as a structured method to show user the result of their most recent edit push
     * @return {void}
     */
    const dialogRef = this.dialog.open(ViewFleetPopup);
    let popupresult = undefined;
    dialogRef.afterClosed().subscribe(
      x => popupresult = x
    )
  }

  // Validates all changes made thus far - true if all pass
  // This was not completed as it is low priority, already have validation on the backend
  // Ideally should be implemented if time permits
  validateChanges(): ChkFail[] {
    /**
     * [NOT IMPLEMENTED] A function to validate all proposed edits before sending them to the backend
     * This was deemed low priority as we already had validation on backend working ahead of time, 
     * and are instead relying on the backend response header to determine if edits are valid.
     * @return {ChkFail[]} return array of validation issues found - empty if none
     */
    return [];
  }

  // Attempts to submit changes, flashes error message if server reports any fails
  submitChanges(): void {
    /**
     * Determine which existing records have been modified, then send all three edit arrays to the
     * backend for validation and database update. Three arrays are additions, modifications, deletions
     * Prompts user with a snackbar on success or failure
     * @return {void}
     */
    this.findChanges();

    // Pop a message and do nothing if nothing to submit
    if ((this.mod_vehicles.length==0)&&(this.add_vehicles.length==0)&&(this.del_vehicles.length==0)){
      this._snackBar.open("No changes to submit", "", {duration: 2000})
      return;
    }

    // Submit the changes via the 3 modification types, arrays passed below
    this.fleetfetcher.submitChanges(
      this.add_vehicles,
      this.mod_vehicles,
      this.del_vehicles
    ).subscribe(
      // Pop a snackbar on success
      x => {
        console.log(x);
        console.log(x.status)
        if (x.status == 201) {
          this._snackBar.open("Edits were successfully received!", "", {duration: 2000})
          setTimeout(_ => location.reload(), 1900);
        }
        else if (x.status == 400){
          this._snackBar.open("Some edits did not pass - changes were not saved", "", {duration: 2000})
        }
        else{
          this._snackBar.open("An unknown error occurred, changes were not saved. Please try again", "", {duration: 2000})
        }
      },
      // Pop a snackbar on failure
      y => {
        console.log(y);
        console.log(y.status)
        if (y.status == 201) {
          this._snackBar.open("Edits were successfully received!", "", {duration: 2000})
          setTimeout(_ => location.reload(), 1900);
        }
        else if (y.status == 400){
          this._snackBar.open("Some edits did not pass - changes were not saved", "", {duration: 2000})
        }
        else{
          this._snackBar.open("An unknown error occurred, changes were not saved. Please try again", "", {duration: 2000})
        }
      }
    )
    
  }

  // Only calculated just before user submission of all edits
  // Compares live array with original array to determine what edits were made
  findChanges(): void {
    /**
     * Determine any changes made to the original input array, vs the live array that is 2-way 
     * bound to the visual editor, store them in the class variable for modifications
     * @return {void}
     */
    let keys = [
      "_id",
      "rego",
      "capacity",
      "available",
      "icon",
      "homeDepot"
    ]

    // Check which records vary, to add to mod array
    for (let i=0; i < this.orig_fleet.length; i++){
      let changed = false
      keys.forEach(key => {
        if (this.all_fleet[i][0][key] != this.orig_fleet[i][0][key])
          if (!changed){
            changed = true
            this.mod_vehicles.push(this.all_fleet[i][0])
          }
      });
    }
  }

  // Reloads the page
  reloadPage(): void {
    /**
     * Reloads the page using reload - called in some HTML loopbacks
     * @return {void}
     */
    location.reload();
  }
}


// This export is the dialog box that pops to verify user changes
// No longer in use as not completed - dormant component and class declaration
@Component({
  selector: './view-fleet-popup',
  templateUrl: './view-fleet-popup.html',
})
export class ViewFleetPopup {
  @Input() chk_result : ChkFail;
}

// Extra interface storing some extra editor info about each vehicle
// Can be expanded as required
interface VehicleExtra {
  rego:     string, // no longer used - was here to provide alternative rego formatting (eg "ABCDEF" vs "ABC DEF")
  selected: boolean
}

// Unused interface - I was going to use this to report any failures during validation of edits
// Any errors could then be shown to the user in a popup window / messagebox, with detail of what failed
interface ChkFail {
  arrtype:  (0 | 1 | 2),  // 0 = new | 1 = modify | 2 = delete
  error:    string,
  failobj:  Vehicle,
  failval:  any
}

// Adapted from https://stackoverflow.com/a/1349426
// Generates a random rego for use in newly created rego records
function regoGen(length: number) {
  /**
   * Generates a random n letter VIN registration, for use as a placeholder
   * @param {number} length length of the string to return
   * @returns {string} string of desired length containing only numbers and upper-case alpha-glyphs
   */
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}