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
  datapoints: any[] = []; // for mixed / weighted dataset

  constructor(private binfetcher: BinfetcherService) { }

  // Process and store bins when ready
  ngOnInit(): void {
    this.binfetcher.getAllBins()
      .subscribe(bins_in => this.process_markers(bins_in));
  }

  // Renders the heatmap - only runs once heatmap is loaded
  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
    this.renderHeatmap();
  }

  // Set instance bins variable, convert all to markers and display
  process_markers(bins: Bin[]){
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
  // Uses bins and assosciated fullness levels to determine point weights
  renderHeatmap(){
    this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: this.datapoints,
        radius: 25
    });
  }
}
