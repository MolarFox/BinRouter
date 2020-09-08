import { Component, OnInit } from '@angular/core';
import { AgmMarker } from '@agm/core';

@Component({
  selector: 'app-view-bins',
  templateUrl: './view-bins.component.html',
  styleUrls: ['./view-bins.component.css']
})
export class ViewBinsComponent implements OnInit {

  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  // TEMP CODE TO GET DUMMY BIN LOCS
  markers: any[] = [];

  mapClicked($event: any) {
    console.log($event)
    this.markers.push({
      lat:   $event.coords.lat,
      lng:  $event.coords.lng,
      draggable: true
    });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
