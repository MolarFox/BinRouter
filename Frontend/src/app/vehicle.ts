/**
 * Vehicle / fleet interfaces definition file
 *
 * Internal processes in frontend expect the regular Vehicle type, though
 * due to frequent updates and uncertainty in the type of response the backend
 * may send, it may be necessary to maintain a separate interface for the actual response
 * format and conversion functions to go between the two formats.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { DepotRaw } from './depot';

// Struct for vehicles (used by frontend internally)
export interface Vehicle {
    _id:        string,
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
