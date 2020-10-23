// Struct for vehicle depots
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
    return outarray
}