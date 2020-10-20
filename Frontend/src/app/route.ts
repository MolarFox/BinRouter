import { DepotRaw } from './depot';

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

/*
export interface NavRouteResponse {
    routes: {
        directions: google.maps.DirectionsResult[]
        vehicle:    string
    }[],
    timestamp:  Date
}*/