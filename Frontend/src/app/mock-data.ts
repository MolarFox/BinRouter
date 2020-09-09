// This file is pretending to be data - it should be fetched from a server in final product
// Service is using observables to make transition to prod setup seamless

import { Bin } from './bin';
import { Vehicle } from './vehicle';
import { NavRoute } from './route';

export const DUMMY_BINS: Bin[] = [
    {
        "serial": 0,
        "lat": -37.81588189917096,
        "lng": 144.961260231044,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 1,
        "lat": -37.8149185202159,
        "lng": 144.96157977915462,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 2,
        "lat": -37.81494712580288,
        "lng": 144.96160526014026,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 3,
        "lat": -37.81364742554133,
        "lng": 144.9661884831077,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 4,
        "lat": -37.81366331780908,
        "lng": 144.96619652973473,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 5,
        "lat": -37.81364530657204,
        "lng": 144.9661348389274,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 6,
        "lat": -37.81367285316811,
        "lng": 144.96615763770401,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 7,
        "lat": -37.8136559014179,
        "lng": 144.9661174045688,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 8,
        "lat": -37.81368344801,
        "lng": 144.9661375211364,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 9,
        "lat": -37.81370145923775,
        "lng": 144.96614959107697,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 10,
        "lat": -37.81374701702948,
        "lng": 144.96616970764458,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 11,
        "lat": -37.81368874543038,
        "lng": 144.9662085996753,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 12,
        "lat": -37.813721589428255,
        "lng": 144.96621798740685,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 13,
        "lat": -37.81377244462194,
        "lng": 144.96623676286995,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 14,
        "lat": -37.81517434626088,
        "lng": 144.9637759768062,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 15,
        "lat": -37.81507263776985,
        "lng": 144.964097841888,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 16,
        "lat": -37.81450688173096,
        "lng": 144.96750022402338,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 17,
        "lat": -37.814559855326806,
        "lng": 144.967520340591,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 18,
        "lat": -37.814509000675514,
        "lng": 144.9674492620521,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 19,
        "lat": -37.814545022723806,
        "lng": 144.9674693786197,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 20,
        "lat": -37.81431730286683,
        "lng": 144.96663296273002,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 21,
        "lat": -37.81428975651122,
        "lng": 144.96675902655372,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 22,
        "lat": -37.81423254481675,
        "lng": 144.96696019222983,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 23,
        "lat": -37.81441053660952,
        "lng": 144.9662494068409,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 24,
        "lat": -37.8144931755103,
        "lng": 144.96632719090232,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 25,
        "lat": -37.814264329096936,
        "lng": 144.96718549778709,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 26,
        "lat": -37.81438510923683,
        "lng": 144.96692264130363,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 27,
        "lat": -37.81450165128977,
        "lng": 144.96698701431998,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 28,
        "lat": -37.81458429008853,
        "lng": 144.96704870512733,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 29,
        "lat": -37.8139316529531,
        "lng": 144.96750199845084,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 30,
        "lat": -37.81378756345741,
        "lng": 144.9673839812542,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 31,
        "lat": -37.81358414251414,
        "lng": 144.9673330192829,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 32,
        "lat": -37.813512097462336,
        "lng": 144.9672230487133,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 33,
        "lat": -37.813348936349804,
        "lng": 144.96719086220511,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 34,
        "lat": -37.81320908368065,
        "lng": 144.96707552721747,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 35,
        "lat": -37.81536374027068,
        "lng": 144.96419864501908,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 36,
        "lat": -37.81540611865854,
        "lng": 144.96420669164613,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 37,
        "lat": -37.8153086483301,
        "lng": 144.9641315897937,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 38,
        "lat": -37.815342551067644,
        "lng": 144.9641315897937,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 39,
        "lat": -37.81517727507512,
        "lng": 144.96406185235932,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 40,
        "lat": -37.81519316701356,
        "lng": 144.9641101321216,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    }
]

export const DUMMY_VEHICLES: Vehicle[] = [
    // TODO: populate with dummy vals
]

export const DUMMY_ROUTES: NavRoute[] = [
    // TODO: populate with dummy vals
]
