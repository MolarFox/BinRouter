import { Output } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { DepotRaw } from './depot';

// Latest internal struct for actual route data
export interface NavRoute {
    vehicle: string,
    visitingOrder: {
        longitude:  number,
        latitude:   number
    }[]
}

// Raw response from backend with route data
export interface NavRouteResponse {
    depots: DepotRaw[],
    binCollectionSchedules: {
        routes: NavRoute[],
        timestamp:  Date
    }[]
}

// Same info as Navroute, formatted for use with agm-directions renderer object
export interface NavRouteWaypointed {
    vehicle: string,
    waypoints: google.maps.DirectionsWaypoint[]
}

// Converts NavRoute to NavRouteWaypointed, for use with agm-directions renderer
export function navToWaypoint(nav: NavRoute): NavRouteWaypointed {
    try{
        let waypointed: google.maps.DirectionsWaypoint[] = []
        nav.visitingOrder.forEach(x =>
            waypointed.push(
                {
                    location: new google.maps.LatLng(
                        {lat: x.latitude, lng:x.longitude}
                    ),
                    stopover: true
                }
            )    
        )
        return {
            vehicle: nav.vehicle,
            waypoints: waypointed
        }
    }catch(err){
        if (err.name == 'ReferenceError'){
            location.reload();
        }else{
            throw err;
        }
    }
}

/*
// Struct for routes
export interface NavRoute {
        geocoded_waypoints: {
            geocoder_status: string,
            place_id: string,
            types: string[],
            partial_match: boolean
        }[],
        routes: {
            bounds: any,
            legs: any,
            overview_polyline: any 
            warnings: [],
            waypoint_order: number[],
            summary: string,
            copyrights: string
        }[],
        status: string
}

export interface NavRouteResponse {
    binCollectionSchedules: {
        routes: {
            directions: google.maps.DirectionsResult[],
            vehicle: string
        }[],
        timestamp: Date
    }[],
    depots: DepotRaw[]
}
*/
/*
export interface NavRouteResponse {
    routes: {
        directions: google.maps.DirectionsResult[]
        vehicle:    string
    }[],
    timestamp:  Date
}*/