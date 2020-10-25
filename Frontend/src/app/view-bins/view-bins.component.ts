/**
 * Bin view / editor ts file
 * 
 * Handles all logic for the bin viewer and editor,
 * most importantly handles sending of requests to backend and
 * validation of these edits.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { BinfetcherService } from '../binfetcher.service';
import { Bin } from '../bin';
import { HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-bins',
  templateUrl: './view-bins.component.html',
  styleUrls: ['./view-bins.component.css']
})
// Code for bin editor view
export class ViewBinsComponent implements OnInit {

  // Start coords and zoom for map - these coords are in the CBD
  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  // Bin arrays and current bin selection
  all_bins: [Bin, BinExtra][] = [];   // Array of all bins
  orig_bins: Bin[] = [];  // Unmodified array of all bins
  selbin: [Bin, BinExtra];

  // Arrays to track modifications made during editing
  del_bins: string[] = [];  // Array of dumb bins staged for deletion
  mod_bins: Bin[] = [];     // Array of dumb bins to modify with new values
  add_bins: Bin[] = [];     // Array of dumb bins to create

  // Editor vars
  subtitle = "Pick a bin to begin editing"
  picker_active: boolean = false;

  constructor(
    private binfetcher: BinfetcherService,
    private _snackBar: MatSnackBar
    ) { }

  // Retrieve and process bins into live storage once available
  ngOnInit(): void {
    /**
     * Called when the page has initialised fully
     * @return {null}
     */
    this.binfetcher.getAllBins()
      .subscribe(bins_in => this.process_markers(bins_in));
    console.log(`Bin view loaded at time ${new Date()}`);
  }

  // Set instance bins variable, convert all to markers and display
  // Note deep copy of full bin array stored into the reference / backup array
  process_markers(bins: Bin[]): void{
    /**
     * Called after bins have been loaded
     * Processes the input bins and formats them for placement into the live and original 
     * bin tracking arrays in the class
     * @param {Bin[]} bins Array of bins, raw response from the backend
     * @return {void}
     */
    this.orig_bins = JSON.parse(JSON.stringify(bins));  // deep copy
    bins.forEach(bin => 
      this.all_bins.push(
        [ bin,{ "draggable": false } ]
      )
    )
  }

  // Handles clicks on the map
  mapClicked(e: {coords: {lat: number, lng: number}}): void{
    /**
     * Called when the map is clicked anywhere
     * If the bin location picker is active, sets new location for the active bin
     * otherwise ignores the event
     * @param {{{number, number}}} e map click event, containing map coordinates of click
     * @return {void}
     */
    // Update selected bin location if picker enabled
    if (this.picker_active){
      this.picker_active = false;
      this.selbin[0].lat = e.coords.lat;
      this.selbin[0].lng = e.coords.lng;
    }
  }

  // handles drag completions of marker
  draggedMarker(e: any): void {
    /**
     * [nop adjacent] Handles end of a marker drag event
     * No longer does anything, see below for explanation and new method to update locations
     * @param e info about mouse drag event - does not contain map coords
     * @return {void}
     */
    // Does nothing anymore
    /**
     * Due to the way markers take input for their lat/lng,
     * it is not possible to do a 2-way bind, only a 1-way bind
     * Dragging a marker therefore cannot update the bin coords when using agm
     * 
     * My fix for this is that the user can pick a point on the map to move the marker to,
     * and that will set the new coords. See below.
     */
  }

  // Handles clicks to a marker
  clickedMarker(index: number): void {
    /**
     * Called whenever a marker is clicked
     * sets the clicked marker to be the active marker, and disable bin location picker
     * @param {number} index index of the marker clicked, corresponds to the bin array
     * @return {void}
     */
    this.selbin = this.all_bins[index]; // Make clicked bin the active bin
    this.picker_active = false;         // Deactivate bin loc picker, if it was active
  }

  // triggered whenever user deletes a dumb bin from editor view
  binDelete(bindel: [Bin, BinExtra]): void {{
    /**
     * Delete the specified bin - only gets tracked if the 
     * deleted bin was a pre-exising one, not one newly added in this edit session
     * @param {[Bin, VehicleExtra]} bindel the specified bin to delete
     * @return {void}
     */
    // Add bin to deletion array if not a newly created and staged bin
    if (bindel[0].serial) this.del_bins.push(bindel[0].serial);

    // Remove bin from main arrays using splice
    let remindex = this.all_bins.findIndex(b => 
      (b[0].serial === bindel[0].serial) && (b[0].lat === bindel[0].lat) && (b[0].lng === bindel[0].lng)
    );
    this.all_bins.splice(remindex, 1);
    if (bindel[0].serial) this.orig_bins.splice(remindex, 1);
    else this.add_bins.splice(
      this.all_bins.findIndex(b => 
        (b[0].serial === bindel[0].serial) && (b[0].lat === bindel[0].lat) && (b[0].lng === bindel[0].lng)
      ),
      1
    )

    // unset selected bin
    this.selbin = undefined
  }}

  // triggered whenever user clicks 'new' on editor view
  binAdd(): void {
    /**
     * Create a new bin with starting coords in the CBD
     * Also track it in the new bins array for later posting of edits to backend
     * @return {void}
     */
    let newbin: [Bin,BinExtra] = [
      {
        "serial":       undefined,
        "smartSerial":  undefined,
        "lat":          this.start_lat,
        "lng":          this.start_lng,
        "address":      "",
        "capacity":     100,
        "is_smart":     false,
        "threshold":    0,
        "fullness":     0
      },
      { "draggable": false }
    ]

    // Push bin to live and add array, set active, disable picker if it was active
    this.all_bins.push(newbin);
    this.add_bins.push(newbin[0]);
    this.selbin = this.all_bins[this.all_bins.length-1];
    this.picker_active = false;
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
    if ((this.mod_bins.length==0)&&(this.add_bins.length==0)&&(this.del_bins.length==0)){
      this._snackBar.open("No changes to submit", "", {duration: 2000})
      return;
    }

    // Submit changes to backend, helper function will format the three passed arrays below
    this.binfetcher.submitChanges(
      this.add_bins,
      this.mod_bins,
      this.del_bins
    ).subscribe(
      x => {
        console.log(x)
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
  // Checks live array with backup array to determine what changes were made
  findChanges(): void {
    /**
     * Determine any changes made to the original input array, vs the live array that is 2-way 
     * bound to the visual editor, store them in the class variable for modifications
     * @return {void}
     */
    let keys = [
      "serial",
      "smartSerial",
      "lat",
      "lng",
      "address",
      "capacity",
      "is_smart",
      "threshold",
      "fullness"
    ]

    // Check which records vary, to add to mod array
    for (let i=0; i < this.orig_bins.length; i++){
      let changed = false
      keys.forEach(key => {
        if (this.all_bins[i][0][key] != this.orig_bins[i][key]){
          if (!changed){
            changed = true
            this.mod_bins.push(this.all_bins[i][0]);
          }  
        }
      });

      while(this.all_bins[i][0]["is_smart"]) i++;
    }
  }

}

// Extra parameters maintained for each bin record
// Note that even this param is no longer in use as 
// Dragging is not a useable coord update method
// It is here for future use, as it is already implemented and integrated
interface BinExtra {
  draggable: boolean
}

// Unused struct made to hold result of any failures in validation
// See fleet editor for an idea of how I planned to use this
// By passing an array of these to a popup box module via ng input decorators,
// The popup could clearly show the user which edits failed and need to be fixed up
interface ChkFail {
  arrtype:  (0 | 1 | 2),  // 0 = new | 1 = modify | 2 = delete
  error:    string,
  failobj:  Bin,
  failval:  any
}
