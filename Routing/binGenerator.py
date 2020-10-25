"""
Author: Anthony Grainger
Date: Oct 2020

This is a testing file, and is used to generate bins in a JSON format
"""
from random import *
from math import ceil
from geopy.geocoders import Nominatim as geo

class Bin:
    minLong = 144.578325
    maxLong = 144.812508
    minLat = -37.932013
    maxLat = -37.818680

    minCap = 100
    maxCap = 500

    locations = set()

    def __init__(self):

        # Get initial random location
        self.lat = randrange(round(Bin.minLat * 100000), round(Bin.maxLat * 100000), 1) / 100000
        self.long = randrange(round(Bin.minLong * 100000), round(Bin.maxLong * 100000), 1) / 100000

        # Keep getting random location
        while ((round(self.lat), 4), (round(self.long), 4)) in Bin.locations:
            self.lat = randrange(round(Bin.minLat * 100000), round(Bin.maxLat * 100000), 1) / 100000
            self.long = randrange(round(Bin.minLong * 100000), round(Bin.maxLong * 100000), 1) / 100000

        self.address = str(geolocator.reverse(str(self.lat) + ", " + str(self.long)))   # Get nearest address
        l = geolocator.geocode(self.address)    #
        self.lat = l.latitude
        self.long = l.longitude
        self.capacity = randrange(Bin.minCap, Bin.maxCap, 1)

    def __str__(self):
        return '{"location" : { "type" : "Point", "coordinates" : [' + str(self.long) + ',' + str(self.lat) + ']}, "address" : "' + self.address + '","capacity" : ' + str(self.capacity) + '}'


# Unused in this implementation
class SmartBin(Bin):
    sNums = set()
    id_ = 0

    def __init__(self):
        Bin.__init__(self)

        self.id = Bin.id_
        Bin.id_ += 1

        s = randint(0, 9999999)
        while str(s) in SmartBin.sNums:
            s = randint(0, 9999999)
        SmartBin.sNums.add(s)
        self.sNum = str(s)
        self.threshold = ceil(0.7 * self.capacity)
        self.currFullness = randrange(0, self.capacity)

    def __str__(self):
        return '{"_id":"' + str(self.id) + '","serialNumber":"' + self.sNum + '","longitude":' + str(self.long) + ',"latitude":' + str(self.lat) + ',"address":"' + self.address + '","capacity":' + str(self.capacity) + ',"threshold":' + str(self.threshold) + ',"currentFullness":' + str(self.currFullness) + ',"isSmart":true}'


if __name__ == "__main__":
    # geoPy initiation
    geolocator = geo(user_agent="appname")

    while True:
        x = input("Number of regular bins to generate: ")
        y = 0
        try:
            x = max(0, int(x))
        except:
            print("Couldn't convert to integer. Try again.")
            continue

        print('{"dumbBins" : [', end="")
        for i in range(x):
            b = Bin()
            print(b, end="")
            if x - i != 1 or (x - i == 1 and y > 0):
                print(",")

        print("]}\n")