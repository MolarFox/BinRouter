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

export interface VehicleDepotResponse {
    depots: DepotRaw[],
    fleetVehicles: Vehicle[]
}
