// Struct for bins
export interface Bin {
    serial:     string,
    smartSerial:number,
    lat:        number,
    lng:        number,
    address:    string,
    capacity:   number,
    is_smart:   boolean
    threshold:  number,
    fullness:   number
}

export interface BinRaw {
    _id:                 string,
    serialNumber:       number,
    longitude:          number,
    latitude:           number,
    address:            string,
    capacity:           number,
    threshold:          number,
    currentFullness:    number,
    isSmart:            boolean
}

export interface BinResponse {
    bins:   BinRaw[]
}

export function jsonToBins(res: BinRaw[]): Bin[] {
    let outarray: Bin[] = []
    for (let i=0; i < res.length; i++){
        let record = res[i]
        outarray.push(
            {
                "serial":       record._id,
                "smartSerial":  record.serialNumber,
                "lat":          record.latitude,
                "lng":          record.longitude,
                "address":      record.address,
                "capacity":     record.capacity,
                "is_smart":     record.isSmart,
                "threshold":    record.threshold,
                "fullness":     record.currentFullness
            }
        )
    }
    return outarray
}