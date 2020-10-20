import { DepotRaw } from './depot';

// Struct for routes
export interface NavRoute { // Renamed to avoid conflict
        geocoded_waypoints: {
            geocoder_status: string,
            place_id: string,
            types: string[]
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
    routes: {
        directions: NavRoute[]
        vehicle:    string
    }[],
    timestamp:  Date
}