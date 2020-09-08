import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-heatmap',
  templateUrl: './view-heatmap.component.html',
  styleUrls: ['./view-heatmap.component.css']
})
export class ViewHeatmapComponent implements OnInit {
  private map: google.maps.Map = null;
  private heatmap: google.maps.visualization.HeatmapLayer = null;
  
  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  constructor() { }

  ngOnInit(): void {
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;

    const coords: google.maps.LatLng[] = []; // TODO: can also be a google.maps.MVCArray with LatLng[] inside
    this.heatmap = new google.maps.visualization.HeatmapLayer({
        map: this.map,
        data: coords
    });
  }
}
