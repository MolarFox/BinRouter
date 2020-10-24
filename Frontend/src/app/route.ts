/**
 * Route interfaces definition file
 * 
 * The actual nature of these responses varies widely, though by centralising all definitions
 * to a single file like below, it is possible to perform refactoring without affecting the 
 * entire codebase of the frontend.
 * 
 * The format returned by the backend (following computation via OR tools), the format described in the 
 * Google API specification, and the format that seems to actually be returned when calling the JS API
 * renderer all seem to be completely different. Efforts to convert or reformat these structures for 
 * compatibility were largely unsuccessful, as can be seen in the commented-out code below.
 * 
 * Combined with difficulties in feeding this data into either the vanilla JS endpoint or into the
 * encapsulated agm-directions injectable renderer, I ultimately opted to recalculate this data for use.
 * See the route display page for more information.
 *
 * Internal processes in frontend expect the regular Route type, though
 * due to frequent updates and uncertainty in the type of response the backend
 * may send, it may be necessary to maintain a separate interface for the actual response
 * format and conversion functions to go between the two formats.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

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
    /**
     * Method to convert regular navroute to one using google maps embedded datatype
     * @param {NavRoute} nav input navroute
     * @return {NavRouteWaypointed} mutated input containing google.maps.DirectionsWaypoint[] type
     */
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