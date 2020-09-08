// Struct for bins
export interface Bin {
    serial:     number,
    lat:        number,
    lon:        number,
    address:    string,
    capacity:   number,
    dumb:       boolean
    threshold:  number,
    fullness:   number
}