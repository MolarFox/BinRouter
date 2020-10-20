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

  private directionsService: google.maps.DirectionsService;
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
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer.setMap(this.map);

    /*
    // This will generate a new request and log acceptable response
    this.directionsService.route(
      {
        origin: new google.maps.LatLng(37.7699298, -122.4469157),
        destination: new google.maps.LatLng(37.7683909618184, -122.51089453697205),
        travelMode: google.maps.TravelMode["DRIVING"]
      }, (resp, status) => {
      if (status == 'OK'){
        console.log("asdf")
        console.log(resp)
        this.directionsRenderer.setDirections(resp);
      }
    }
    )
    */
    
    // This will use the first route of first vehicle read in from backend
    this.directionsRenderer.setDirections(
      this.all_routes.binCollectionSchedules[0].routes[0].directions[0]
    );
    console.log(google.maps.geometry.encoding.decodePath(
      this.all_routes.binCollectionSchedules[0].routes[0].directions[0].routes[0].overview_polyline));
  }


}
