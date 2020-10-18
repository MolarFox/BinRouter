// Struct for vehicle depots
export interface Depot {
    id:         string,
    lat:        number,
    lng:        number,
    address:    string
}

export interface DepotRaw {
    id:         string,
    longitude:  number,
    latitude:   number,
    address:    string
}

export interface DepotResponse {
    depots: DepotRaw[]
}

export function jsonToDepots(res: DepotRaw[]): Depot[] {
    let outarray: Depot[] = []
    for (let i=0; i < res.length; i++){
        let record = res[i];
        outarray.push(
            {
                "id": record.id,
                "lat": record.latitude,
                "lng": record.longitude,
                "address": record.address
            }
        )
    }
    return outarray
}