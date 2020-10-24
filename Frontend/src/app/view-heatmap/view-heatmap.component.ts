/**
 * Heatmap view ts file
 * 
 * Handles all logic for heatmap, including loading of bin data,
 * initalisation of map and timely rendering of heatmap itself once all
 * components are loaded.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { Component, OnInit } from '@angular/core';
import { BinfetcherService } from '../binfetcher.service'
import { Bin } from '../bin';

@Component({
  selector: 'app-view-heatmap',
  templateUrl: './view-heatmap.component.html',
  styleUrls: ['./view-heatmap.component.css']
})
export class ViewHeatmapComponent implements OnInit {
  // Legacy - used for vanilla gmaps JS api hook
  private map: google.maps.Map = null;
  private heatmap: google.maps.visualization.HeatmapLayer = null;

  private mapOrPointsLoaded: boolean = false; // true if at least one has loaded
  
  // Default centre point and zoom of mapview
  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  all_bins: Bin[] = [];
  //datapoints: google.maps.LatLng[] = []; 
  datapoints: any[] = []; // for mixed / weighted dataset (exact format keeps changing on backend)

  constructor(private binfetcher: BinfetcherService) { }

  // Process and store bins when ready
  ngOnInit(): void {
    /**
     * Called when the page has initialised fully
     * @return {null}
     */
    this.binfetcher.getAllBins()
      .subscribe(bins_in => this.process_markers(bins_in));
  }

  // Renders the heatmap - only runs once heatmap is loaded
  onMapLoad(mapInstance: google.maps.Map) {
    /**
     * Called once the map has loaded
     * Sets the map instance and calls the heatmap renderer method
     */
    this.map = mapInstance;
    this.renderHeatmap();
  }

  // Set instance bins variable, convert all to markers and display
  process_markers(bins: Bin[]): void{
    /**
     * Process the raw bin response from backend into the format used by the 
     * map renderer - involves using a google maps LatLng type
     * @param {Bin[]} bins array of raw bins
     * @return {void}
     */
    try{
      this.all_bins = bins;
      bins.forEach(bin =>
        this.datapoints.push(
          {location: new google.maps.LatLng(bin.lat, bin.lng), weight: 30}
        )
      )
      this.renderHeatmap();
    }catch(err){
      if (err.name == 'ReferenceError'){
        location.reload();
      }else{
          throw err;
      }
    }
  }

  // Render heatmap (to be called after map loaded)
  // Uses bins and associated fullness levels to determine point weights
  renderHeatmap(){
    /**
     * Should only be called once the map has loaded and bin data is ready
     * Renders the heatmap on the targeted agm-maps map instance using bin data
     * @return {void}
     */
    this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: this.datapoints,
        radius: 25
    });
  }
}
