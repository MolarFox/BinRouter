import { GoogleMapsAPIWrapper } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-view-routes',
  templateUrl: './view-routes.component.html',
  styleUrls: ['./view-routes.component.css']
})
export class ViewRoutesComponent implements OnInit {

  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  origin: any = {
    latitude: -37.907803,
    longitude: 145.133957
  };

  destination: any = {
    latitude: -37.8997609,
    longitude: 145.1292176
  };

  waypoints: any = []

  displayDirections = true;
  zoom = 14; 

  constructor() { }

  ngOnInit(): void {
  }

}
