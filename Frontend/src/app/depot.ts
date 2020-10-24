/**
 * Depot interfaces definition file
 * 
 * Since the backend sometimes sends depot info along with other requests (eg: routing, fleet),
 * those interface definition files may need to import from this one.
 *
 * Internal processes in frontend expect the regular Depot type, though
 * due to frequent updates and uncertainty in the type of response the backend
 * may send, it may be necessary to maintain a separate interface for the actual response
 * format and conversion functions to go between the two formats.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

// Struct for vehicle depots (used in frontend)
export interface Depot {
    id:         string,
    lat:        number,
    lng:        number,
    address:    string,
}

// Struct for new raw response from backend server
// Update this if yisong changes backend spec
export interface DepotRaw {
    _id:        string,
    longitude:  number,
    latitude:   number,
    address:    string
}

// Container to hold incoming response from server (array of depots in raw format)
export interface DepotResponse {
    depots: DepotRaw[]
}

// Convert depotraw to depot (backend format to frontend format)
export function jsonToDepots(res: DepotRaw[]): Depot[] {
    /**
     * Converts raw json response from backend to format used by frontend
     * @param {DepotRaw[]} res array of depot response from backend
     * @return {Depot[]} the raw array with each element converted to frontend format
     */
    let outarray: Depot[] = []
    for (let i=0; i < res.length; i++){
        let record = res[i];
        outarray.push(
            {
                "id": record._id,
                "lat": record.latitude,
                "lng": record.longitude,
                "address": record.address
            }
        )
    }
    return outarray;
}