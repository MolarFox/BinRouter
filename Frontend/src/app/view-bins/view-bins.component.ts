import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Bin } from '../bin';

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
  markers: any[] = [];  // Can't find typedef

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat:   $event.coords.lat,
      lng:  $event.coords.lng,
      draggable: true
    });


  }

  clickedMarker(label: string, index: number) {
    let formatted_out: Bin[] = [];
    for (let i=0; i < this.markers.length; i++){
      let currmark = this.markers[i];
      formatted_out.push(
        {
          serial: i,
          lat: currmark.lat,
          lng: currmark.lng,
          address: "",
          capacity: 1,
          isdumb: false,
          threshold: 40,
          fullness: 0.75 
        }
      )
    }
    console.log(formatted_out)
  }

  // END TEMP CODE

  constructor() { }

  ngOnInit(): void {
  }

}
