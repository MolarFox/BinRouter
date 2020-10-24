/**
 * Bin interfaces definition file
 *
 * Internal processes in frontend expect the regular Bin type, though
 * due to frequent updates and uncertainty in the type of response the backend
 * may send, it may be necessary to maintain a separate interface for the actual response
 * format and conversion functions to go between the two formats.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

// Struct for bins (used throughout frontend)
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

// Struct for bin response from backend, matches latest changes
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

// Struct for bin response back to server, only contains dumb bin params
export interface BinOut {
    _id:        string,
    latitude:   number,
    longitude:  number,
    address:    string,
    capacity:   number
}

// Struct for overall response from backend (nested array of binraws)
export interface BinResponse {
    bins:   BinRaw[]
}

// Converts binraw to bin, for use in translating received data from backend
export function jsonToBins(res: BinRaw[]): Bin[] {
    /**
     * Converts raw json response from backend to format used by frontend
     * @param {BinRaw[]} res array of bin response from backend
     * @return {Bin[]} the raw array with each element converted to frontend format
     */
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

// Converts from bin to binout, for use in translating user edits to puts req format
export function binsToJson(bins: Bin[]): BinOut[] {
    /**
     * Converts frontend bin format ot partial backend format (specialised response type is expected)
     * @param {Bin[]} bins array of bins to be converted
     * @return {BinOut[]} input array converted to the format expected to be received at the backend
     */
    let outarray: BinOut[] = [];
    for (let i=0; i < bins.length; i++){
        let record = bins[i];
        outarray.push(
            {
                "_id":          record.serial,
                "latitude":     Number(record.lat),
                "longitude":    Number(record.lng),
                "address":      record.address,
                "capacity":     record.capacity
            }
        )
    }
    return outarray
}