// Struct for bins
export interface Bin {
    serial:     number,
    lat:        number,
    lon:        number,
    address:    string,
    capacity:   number,
    isdumb:     boolean
    threshold:  number,
    fullness:   number
}