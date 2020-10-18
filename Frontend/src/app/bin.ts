// Struct for bins
export interface Bin {
    serial:     number,
    lat:        number,
    lng:        number,
    address:    string,
    capacity:   number,
    is_smart:   boolean
    threshold:  number,
    fullness:   number
}

export interface BinRaw {
    location: {
        type:           string,
        coordinates:    number[],
    },
    address: string,
    capacity: number
}

export interface BinResponse {
    dumbBins:   BinRaw[]
}

export function jsonToBin(res: BinRaw[]): Bin[] {
    let outarray: Bin[] = []
    for (let i=0; i < res.length; i++){
        let record = res[i]
        outarray.push(
            {
                "serial": i,
                "lat": record.location.coordinates[1],
                "lng": record.location.coordinates[0],
                "address": record.address,
                "capacity": record.capacity,
                "is_smart": false,
                "threshold": 40,
                "fullness": 0.75
            }
        )
    }
    return outarray
}