import { GoogleMapsAPIWrapper } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { RoutefetcherService } from '../routefetcher.service'
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

  origin: google.maps.LatLngLiteral = {
    lat: -37.907803,
    lng: 145.133957
  };

  destination: google.maps.LatLngLiteral = {
    lat: -37.8997609,
    lng: 145.1292176
  };

  waypoints: google.maps.DirectionsWaypoint[] = [
    
  ]

  displayDirections = true;
  zoom = 14; 

  constructor(private routefetcher: RoutefetcherService) { }

  ngOnInit(): void {
    console.log(this.origin)
  }

}
