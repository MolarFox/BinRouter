from random import *
from math import ceil

class Bin:
    minLong = 144.956
    maxLong = 144.9721
    minLat = -37.815954
    maxLat = -37.810157

    minCap = 2
    maxCap = 10

    id_ = 0

    def __init__(self):
        self.id = Bin.id_
        Bin.id_ += 1
        self.lat = randrange(round(Bin.minLat * 10000), round(Bin.maxLat * 10000), 1) / 10000
        self.long = randrange(round(Bin.minLong * 10000), round(Bin.maxLong * 10000), 1) / 10000
        self.address = "123 Fake St"
        self.capacity = randrange(Bin.minCap, Bin.maxCap, 1)

    def __str__(self):
        return '{"_id":"' + str(self.id) + '","longitude":' + str(self.long) + ',"latitude":' + str(self.lat) + ',"address":"' + self.address + '","capacity":' + str(self.capacity) + ',"isSmart":false}'


class SmartBin(Bin):
    sNums = set()

    def __init__(self):
        Bin.__init__(self)

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
    while True:
        x = input("Number of regular bins to generate: ")
        y = input("Number of smart bins to generate: ")
        try:
            x = max(0, int(x))
            y = max(0, int(y))
        except:
            print("Couldn't convert to integer. Try again.")
            continue

        print("[", end="")
        for i in range(x):
            b = Bin()
            print(b, end="")
            if x - i != 1 or (x - i == 1 and y > 0):
                print(",")

        for i in range(y):
            b = SmartBin()
            print(b, end="")
            if y - i != 1:
                print(",")

        print("]")