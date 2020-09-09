// Struct for bins
export interface Bin {
    serial:     number,
    lat:        number,
    lng:        number,
    address:    string,
    capacity:   number,
    isdumb:     boolean
    threshold:  number,
    fullness:   number
}