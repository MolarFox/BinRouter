import { GoogleMapsAPIWrapper } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { RoutefetcherService } from '../routefetcher.service'
import { GoogleMap } from '@angular/google-maps';
import { NavRoute, NavRouteResponse, NavRouteWaypointed, navToWaypoint } from '../route';

@Component({
  selector: 'app-view-routes',
  templateUrl: './view-routes.component.html',
  styleUrls: ['./view-routes.component.css']
})
export class ViewRoutesComponent implements OnInit {

  private directionsService: google.maps.DirectionsService;
  private directionsRenderer: google.maps.DirectionsRenderer;
  map: google.maps.Map = null;

  waypoints: NavRouteWaypointed[] = [];

  render_waypoints = [];

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

  displayDirections = true;

  constructor(private routefetcher: RoutefetcherService) { }

  ngOnInit(): void {
    this.routefetcher.getAllRoutes()
      .subscribe(routes_in => {
        this.all_routes = routes_in;
        routes_in.binCollectionSchedules.forEach(r => 
          r.routes.forEach(p =>
            this.waypoints.push(navToWaypoint(p))
          )
        );

        console.log(this.all_routes)

        this.waypoints.forEach(w => {
          // Get target array
          let index = this.render_waypoints.find(x => x.veh === w.vehicle)
          if (!index){
            this.render_waypoints.push({"veh": w.vehicle, "arr": []})
            index = this.render_waypoints.length-1
          }

          while (w.waypoints.length > 0){
            let newchunk=w.waypoints.splice(0, 14)
            this.render_waypoints[index].arr.push(
              newchunk
            )
          }

          // Partition into start, end, waypoints
          for (let p=0; p < this.render_waypoints[index].arr.length; p++){
            let starttemp;
            let endtemp;
            let waypointtemp = this.render_waypoints[index].arr[p];
            
            if (waypointtemp.length === 1){
              starttemp = waypointtemp[0]
              endtemp = waypointtemp[0]
              waypointtemp = []
            }else{
              starttemp = waypointtemp.splice(0,1);

              // Is final leg?
              if (p == this.render_waypoints[index].arr.length-1){
                endtemp = waypointtemp.splice(waypointtemp.length-1, 1)[0]
              }else{
                endtemp = JSON.parse(JSON.stringify(this.render_waypoints[index].arr[p+1][0]))
              }
            }

            this.render_waypoints[index].arr[p] = {
              "start":    starttemp.location ? starttemp.location : starttemp[0].location,
              "end":      (endtemp.location) ? endtemp.location : endtemp[0].location,
              "waypoints":waypointtemp
            }

          }
        })
        
        if (this.map !== null) this.setupRenderer();
      });
  }

   // Handles clicks on the map
   mapClicked(e: {coords: {lat: number, lng: number}}){
    console.log(this.all_routes);
    console.log(this.waypoints);
  }

  onMapLoad(mapInstance: google.maps.Map) {
    this.map = mapInstance;
    if (this.all_routes) this.setupRenderer();
  }

  setupRenderer(): void {

    /*
    console.log(this.all_routes)
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer.setMap(this.map);
    */
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
    /*
    // This will use the first route of first vehicle read in from backend
    this.directionsRenderer.setDirections(
      this.all_routes.binCollectionSchedules[0].routes[0].directions[0]
    );
    */
  }


}
