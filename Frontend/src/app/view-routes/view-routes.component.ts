import { GoogleMapsAPIWrapper } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { RoutefetcherService } from '../routefetcher.service'
import { GoogleMap } from '@angular/google-maps';
import { NavRoute, NavRouteResponse } from '../route';

@Component({
  selector: 'app-view-routes',
  templateUrl: './view-routes.component.html',
  styleUrls: ['./view-routes.component.css']
})
export class ViewRoutesComponent implements OnInit {

  private directionsRenderer: google.maps.DirectionsRenderer;
  private map: google.maps.Map = null;

  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  all_routes: NavRouteResponse

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

  constructor(private routefetcher: RoutefetcherService) { }

  ngOnInit(): void {
    this.routefetcher.getAllRoutes()
      .subscribe(routes_in => {
        this.all_routes = routes_in;
        console.log(this.all_routes)
        if (this.map !== null) this.setupRenderer();
      });
  }

   // Handles clicks on the map
   mapClicked(e: {coords: {lat: number, lng: number}}){
    console.log(this.all_routes);
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
    if (this.all_routes) this.setupRenderer();
  }

  setupRenderer(): void {
    console.log(this.all_routes)
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);
    this.directionsRenderer.setDirections(
      this.all_routes.binCollectionSchedules[0].routes[0].directions[0]
    );
  }


}
