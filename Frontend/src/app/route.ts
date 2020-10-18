import { DepotRaw } from './depot';

// Struct for routes
export interface NavRoute { // Renamed to avoid conflict
    routes: {
        vehicle: string,
        directions: any // TODO: determine gmaps type
    },
    timestamp:  Date;
}

export interface NavRouteResponse {
    depots: DepotRaw[],
    binCollectionRoute: NavRoute[]
}