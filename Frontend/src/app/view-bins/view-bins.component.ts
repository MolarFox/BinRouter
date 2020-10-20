import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { BinfetcherService } from '../binfetcher.service';
import { Bin } from '../bin';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-bins',
  templateUrl: './view-bins.component.html',
  styleUrls: ['./view-bins.component.css']
})
export class ViewBinsComponent implements OnInit {

  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  all_bins: [Bin, BinExtra][] = [];   // Array of all bins
  orig_bins: Bin[] = [];  // Unmodified array of all bins
  selbin: [Bin, BinExtra];

  del_bins: string[] = [];  // Array of dumb bins staged for deletion
  mod_bins: Bin[] = [];     // Array of dumb bins to modify with new values
  add_bins: Bin[] = [];     // Array of dumb bins to create

  // Editor vars
  subtitle = "Pick a bin to begin editing"
  picker_active: boolean = false;

  constructor(private binfetcher: BinfetcherService) { }

  ngOnInit(): void {
    this.binfetcher.getAllBins()
      .subscribe(bins_in => this.process_markers(bins_in));
  }

  // Set instance bins variable, convert all to markers and display
  process_markers(bins: Bin[]){
    this.orig_bins = JSON.parse(JSON.stringify(bins));  // deep copy
    bins.forEach(bin => 
      this.all_bins.push(
        [ bin,{ "draggable": false } ]
      )
    )
  }

  // Handles clicks on the map
  mapClicked(e: {coords: {lat: number, lng: number}}){
    // Update selected bin location if picker enabled
    if (this.picker_active){
      this.picker_active = false;
      this.selbin[0].lat = e.coords.lat;
      this.selbin[0].lng = e.coords.lng;
    }
  }

  // handles drag completions of marker
  draggedMarker(e: any): void {
    
  }

  // Handles clicks to a marker
  clickedMarker(index: number): void {
    this.selbin = this.all_bins[index];
    this.picker_active = false;
  }

  // triggered whenever user deletes a dumb bin from editor view
  binDelete(bindel: [Bin, BinExtra]): void {{
    // Add bin to deletion array if not a newly created and staged bin
    if (bindel[0].serial) this.del_bins.push(bindel[0].serial);

    // Remove bin from main array
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

    this.all_bins.push(newbin);
    this.add_bins.push(newbin[0]);
    this.selbin = this.all_bins[this.all_bins.length-1];
    this.picker_active = false;
  }

  // Attempts to submit changes, flashes error message if server reports any fails
  submitChanges(): void {
    this.findChanges();
    this.binfetcher.submitChanges(
      this.add_bins,
      this.mod_bins,
      this.del_bins
    ).subscribe(
      x => console.log(x)
    )

  }

  // Only calculated just before user submission of all edits
  findChanges(): void {
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
      let pushed = false;
      keys.forEach(key => {
        if (this.all_bins[i][0][key] !== this.orig_bins[i][key]){
          if (!pushed){
            this.mod_bins.push(this.all_bins[i][0]);
            pushed = true;
          } 
        }
      });

      while(this.all_bins[i][0]["is_smart"]) i++;
    }
  }

}

interface BinExtra {
  draggable: boolean
}

interface ChkFail {
  arrtype:  (0 | 1 | 2),  // 0 = new | 1 = modify | 2 = delete
  error:    string,
  failobj:  Bin,
  failval:  any
}
