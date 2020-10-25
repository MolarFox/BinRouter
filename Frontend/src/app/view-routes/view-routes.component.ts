/**
 * Routes view ts file
 * 
 * Handles all logic for route view, including loading of all route waypoints 
 * for each vehicle
 * 
 * Actual rendering happens though direct instantiation of renderer module in html file.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { GoogleMapsAPIWrapper } from '@agm/core';
import { Component, Input, OnInit } from '@angular/core';
import { RoutefetcherService } from '../routefetcher.service'
import { GoogleMap } from '@angular/google-maps';
import { NavRoute, NavRouteResponse, NavRouteWaypointed, navToWaypoint } from '../route';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-view-routes',
  templateUrl: './view-routes.component.html',
  styleUrls: ['./view-routes.component.css']
})
// This is the code for bin viewer / editor view
export class ViewRoutesComponent implements OnInit {

  @Input() selvehid: string = undefined;   // Currently selected vehicle - only shows routes for this vehicle
  @Input() showselector: boolean = true; // Hides selector if true (for use as an embed in fleetview page)

  // These are no longer used - needed in case of vanilla gmaps JS api hook
  private directionsService: google.maps.DirectionsService;
  private directionsRenderer: google.maps.DirectionsRenderer;
  map: google.maps.Map = null;

  waypoints: NavRouteWaypointed[] = []; // Raw list of all waypoints, sorted by vehicle

  // Contains nicely formatted object for each chunk of each route
  // start and end points are of type lat/lon, waypoints are gmaps type as per method spec
  render_waypoints = [];

  // Initial params of the map (typically overwritten once routes are rendered)
  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  all_routes: NavRouteResponse  // Raw response from backend containing all routes

  // Known stable origin and destination for use in testing
  origin: google.maps.LatLngLiteral = {
    lat: -37.907803,
    lng: 145.133957
  };
  destination: google.maps.LatLngLiteral = {
    lat: -37.8997609,
    lng: 145.1292176
  };

  displayDirections = true; // Legacy param for use in directions API hook

  constructor(private routefetcher: RoutefetcherService) { }

  // On init, perform some actions - format waypoint data and prime map for usage
  ngOnInit(): void {
    /**
     * Called when the page has initialised fully
     * @return {null}
     */
    // Subscribe to observable containing HTTP raw response from backend
    // Will save the response and format it before sending to the renderer
    this.routefetcher.getAllRoutes()
      .subscribe(routes_in => {
        this.all_routes = routes_in;
        routes_in.binCollectionSchedules.forEach(r => 
          r.routes.forEach(p =>
            this.waypoints.push(navToWaypoint(p))
          )
        );

        //console.log(this.all_routes)
        
        // Formatting functions, happens after all the waypoints are received
        this.waypoints.forEach(w => {
          // Get target array
          let index = this.render_waypoints.find(x => x.veh === w.vehicle)
          if (!index){
            this.render_waypoints.push({"veh": w.vehicle, "arr": []})
            index = this.render_waypoints.length-1
          }

          // Chunk the waypoints into groups of 15 max points
          while (w.waypoints.length > 0){
            let newchunk=w.waypoints.splice(0, 24)
            this.render_waypoints[index].arr.push(
              newchunk
            )
          }

          // Partition into start, end, waypoints, for use by renderer
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

            // This is the format that the renderer sees for each leg of the route of each vehicle
            this.render_waypoints[index].arr[p] = {
              "start":    starttemp.location ? starttemp.location : starttemp[0].location,
              "end":      (endtemp.location) ? endtemp.location : endtemp[0].location,
              "waypoints":waypointtemp,
              "vehicle_id" : w.vehicle
            }

          }
        })
        
        // Legacy - init the vanilla JS renderer hook if in use (now using agm renderer instead)
        if (this.map !== null) this.setupRenderer();
      });
    console.log(`Routing view loaded at time ${new Date()}`);
  }

   // Handles clicks on the map
   mapClicked(e: {coords: {lat: number, lng: number}}){
     /**
      * Called whenever the map is clicked
      * Prints a log of all routes and parsed waypoints to console, for debug purposes
      * Input e is not utilised in latest build
      * @param e event object, containing lat lng coordinates of the map location clicked
      */
    console.log(this.all_routes);
    console.log(this.waypoints);
  }

  // Gains pointer to the map instance once it loads, using agm event
  onMapLoad(mapInstance: google.maps.Map) {
    /** 
     * Called when the agm-map instance is finished loading
     * Informs the ts file of the map instance, and starts the renderer if bins have also been loaded [old]
     * @param {google.maps.Map} map the map object that completed loading (should only be 1)
     * @return {null}
     */
    this.map = mapInstance;
    if (this.all_routes) this.setupRenderer();
  }

  // Will initialise the renderer with the map instance and begin drawing
  // Some of the code below can also perform raw requests from gmaps API, used for debugging only
  // The format expected by the vanilla renderer, gmaps api spec, and backend response being sent through all differ
  // ... it's a mess, but the code is clean. See the type definition file for more details on these format discrepancies
  setupRenderer(): void {
    /**
     * [Depreciated] Method to initialise the renderer to begin passing routes to render
     * No longer in use, now using agm-directions instead. Method is nop adjacent.
     * @return {null}
     */

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
