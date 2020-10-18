import { DepotRaw } from './depot';

// Struct for vehicles
export interface Vehicle {
    id:         string,
    rego:       string,
    capacity:   number,
    available:  boolean,
    icon:       number,
    homeDepot:  number
}

export interface VehicleDepotResponse {
    depots: DepotRaw[],
    fleetVehicles: Vehicle[]
}
