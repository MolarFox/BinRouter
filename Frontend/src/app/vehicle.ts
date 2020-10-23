import { DepotRaw } from './depot';

// Struct for vehicles
export interface Vehicle {
    _id:         string,
    rego:       string,
    capacity:   number,
    available:  boolean,
    icon:       number,
    homeDepot:  string
}

// Struct for raw response from backend on vehicle request
export interface VehicleDepotResponse {
    depots: DepotRaw[],
    fleetVehicles: Vehicle[]
}
