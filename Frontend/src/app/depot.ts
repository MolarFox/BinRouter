// Struct for vehicle depots
export interface Depot {
    id:         number,
    lat:        number,
    lng:        number,
    address:    string
}

export interface DepotRaw {
    location: {
        type:           string,
        coordinates:    number[]
    },
    address: string
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
                "id": i,
                "lat": record.location.coordinates[1],
                "lng": record.location.coordinates[0],
                "address": record.address
            }
        )
    }
    return outarray
}