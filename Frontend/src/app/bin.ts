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