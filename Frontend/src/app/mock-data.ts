// This file is pretending to be data - it should be fetched from a server in final product
// Service is using observables to make transition to prod setup seamless

import { Bin } from './bin';
import { Vehicle } from './vehicle';
import { NavRoute } from './route';

export const DUMMY_BINS: Bin[] = [
    {
        "serial": 0,
        "lat": -37.811495635257366,
        "lng": 144.96932295134278,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 1,
        "lat": -37.81117354183993,
        "lng": 144.97054603865357,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 2,
        "lat": -37.8112413510972,
        "lng": 144.97168329527588,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 3,
        "lat": -37.81261447515821,
        "lng": 144.9718120413086,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 4,
        "lat": -37.81376720156546,
        "lng": 144.97108248045654,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 5,
        "lat": -37.81459783149587,
        "lng": 144.96917274763794,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 6,
        "lat": -37.81453002532125,
        "lng": 144.96679094603272,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 7,
        "lat": -37.813580732337456,
        "lng": 144.96584680845947,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 8,
        "lat": -37.81319084061156,
        "lng": 144.96380832960816,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 9,
        "lat": -37.81047849336229,
        "lng": 144.96760633757324,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 10,
        "lat": -37.809190093513884,
        "lng": 144.96951607039185,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 11,
        "lat": -37.80846112048377,
        "lng": 144.9685504751465,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 12,
        "lat": -37.807952530386984,
        "lng": 144.96614721586914,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 13,
        "lat": -37.80763905760432,
        "lng": 144.96269591556322,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 14,
        "lat": -37.80841889763092,
        "lng": 144.96027119861375,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 15,
        "lat": -37.808842720278115,
        "lng": 144.95879061923753,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 16,
        "lat": -37.809249587730875,
        "lng": 144.95756753192674,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 17,
        "lat": -37.80997855297712,
        "lng": 144.95821126209032,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 18,
        "lat": -37.81128389136662,
        "lng": 144.9587691615654,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 19,
        "lat": -37.8129112939211,
        "lng": 144.96001370654832,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 20,
        "lat": -37.81301300538973,
        "lng": 144.95939143405687,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 21,
        "lat": -37.816223932650594,
        "lng": 144.9638345367771,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 22,
        "lat": -37.81790207866253,
        "lng": 144.96181751559791,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 23,
        "lat": -37.8153594183016,
        "lng": 144.95984340976295,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 24,
        "lat": -37.81720709352806,
        "lng": 144.96754671405373,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 25,
        "lat": -37.81851230411743,
        "lng": 144.95703245471535,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 26,
        "lat": -37.818885217189816,
        "lng": 144.9542858726841,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 27,
        "lat": -37.81712233879575,
        "lng": 144.95353485415993,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 28,
        "lat": -37.81432537803898,
        "lng": 144.9545004494053,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 29,
        "lat": -37.81268105468004,
        "lng": 144.95377088855324,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 30,
        "lat": -37.81937753793747,
        "lng": 144.9594581646533,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 31,
        "lat": -37.80971515577764,
        "lng": 144.95233421750976,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 32,
        "lat": -37.80978395301097,
        "lng": 144.9651575088501,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 33,
        "lat": -37.80952290063189,
        "lng": 144.96390801390714,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 34,
        "lat": -37.80976871438835,
        "lng": 144.96373098811216,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 35,
        "lat": -37.81132834122377,
        "lng": 144.9619929166705,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 36,
        "lat": -37.81173519498032,
        "lng": 144.9647448631198,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 37,
        "lat": -37.81302355041901,
        "lng": 144.96339839419431,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 38,
        "lat": -37.81278198548672,
        "lng": 144.96422987898893,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 39,
        "lat": -37.81012895720821,
        "lng": 144.96174615344114,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 40,
        "lat": -37.80908455244779,
        "lng": 144.96162430548597,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 41,
        "lat": -37.8078936085234,
        "lng": 144.9613614490025,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 42,
        "lat": -37.807119845845605,
        "lng": 144.96009216709217,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 43,
        "lat": -37.807213088676995,
        "lng": 144.9597542087563,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 44,
        "lat": -37.80661374106595,
        "lng": 144.9593961238861,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 45,
        "lat": -37.80593716214227,
        "lng": 144.96140108509144,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 46,
        "lat": -37.806466957875735,
        "lng": 144.9616263906487,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 47,
        "lat": -37.80540826874511,
        "lng": 144.96294693773757,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 48,
        "lat": -37.80524297051455,
        "lng": 144.9632741672374,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 49,
        "lat": -37.80693183972442,
        "lng": 144.96420704515356,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 50,
        "lat": -37.807016606155436,
        "lng": 144.96490441949743,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 51,
        "lat": -37.80652495950109,
        "lng": 144.96512972505468,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 52,
        "lat": -37.80601211769276,
        "lng": 144.9653121152677,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 53,
        "lat": -37.80550774913492,
        "lng": 144.96503316553014,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 54,
        "lat": -37.805051269086114,
        "lng": 144.96638275880582,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 55,
        "lat": -37.80502160005676,
        "lng": 144.96605016488797,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 56,
        "lat": -37.80479272428682,
        "lng": 144.96635057229764,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 57,
        "lat": -37.80365108041411,
        "lng": 144.96624112129211,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 58,
        "lat": -37.803731093177625,
        "lng": 144.96626701846662,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 59,
        "lat": -37.80298169351198,
        "lng": 144.96724379274102,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 60,
        "lat": -37.80279095848483,
        "lng": 144.96744227620812,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 61,
        "lat": -37.80210430830862,
        "lng": 144.966519596307,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 62,
        "lat": -37.80251091181261,
        "lng": 144.9667239189148,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 63,
        "lat": -37.802563262913885,
        "lng": 144.9667556307003,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 64,
        "lat": -37.80279214559298,
        "lng": 144.96507656785698,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 65,
        "lat": -37.80277519134478,
        "lng": 144.96495855066033,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 66,
        "lat": -37.80382210887134,
        "lng": 144.96477079602928,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 67,
        "lat": -37.80466556604358,
        "lng": 144.9649156353161,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 68,
        "lat": -37.806269784108736,
        "lng": 144.96683253703492,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 69,
        "lat": -37.806151109877916,
        "lng": 144.96753424851474,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 70,
        "lat": -37.807248839236266,
        "lng": 144.96717483250674,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 71,
        "lat": -37.807503137145794,
        "lng": 144.96662229744967,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 72,
        "lat": -37.807693860003255,
        "lng": 144.96595710961398,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 73,
        "lat": -37.808848899394555,
        "lng": 144.9661163102143,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 74,
        "lat": -37.811842170251715,
        "lng": 144.9567844715029,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 75,
        "lat": -37.80931625392693,
        "lng": 144.956441148749,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 76,
        "lat": -37.80753619387712,
        "lng": 144.95466016196312,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 77,
        "lat": -37.80601039396733,
        "lng": 144.95491765402855,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 78,
        "lat": -37.8057560909174,
        "lng": 144.9523856487185,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 79,
        "lat": -37.8039201704889,
        "lng": 144.95526097678245,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 80,
        "lat": -37.80398798640701,
        "lng": 144.95573304556908,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 81,
        "lat": -37.80414057199507,
        "lng": 144.9602391567141,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 82,
        "lat": -37.80212302596919,
        "lng": 144.95796464346947,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 83,
        "lat": -37.80110575497273,
        "lng": 144.95624802969994,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 84,
        "lat": -37.80186870953358,
        "lng": 144.95466016196312,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 85,
        "lat": -37.80113966423167,
        "lng": 144.95354436301292,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 86,
        "lat": -37.80112270960415,
        "lng": 144.95302937888206,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 87,
        "lat": -37.79968333461159,
        "lng": 144.95457433127464,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 88,
        "lat": -37.798089551190444,
        "lng": 144.9574282016665,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 89,
        "lat": -37.79793695310161,
        "lng": 144.95813630484642,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 90,
        "lat": -37.799700289569515,
        "lng": 144.95798610114159,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 91,
        "lat": -37.79868298520591,
        "lng": 144.96414445303978,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 92,
        "lat": -37.797767399299886,
        "lng": 144.96420882605614,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 93,
        "lat": -37.79642791058485,
        "lng": 144.96285699271263,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 94,
        "lat": -37.796088795665,
        "lng": 144.95996020697655,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 95,
        "lat": -37.798784716272735,
        "lng": 144.96556065939964,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 96,
        "lat": -37.80076844407258,
        "lng": 144.96822141074242,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 97,
        "lat": -37.79944596479208,
        "lng": 144.96961615943016,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 98,
        "lat": -37.799483127194186,
        "lng": 144.97215228084187,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 99,
        "lat": -37.79995786583157,
        "lng": 144.97210936549763,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 100,
        "lat": -37.801093835185384,
        "lng": 144.9740834713326,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 101,
        "lat": -37.80533237258894,
        "lng": 144.97389035228352,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 102,
        "lat": -37.80579012007464,
        "lng": 144.97597174647908,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 103,
        "lat": -37.809358991137984,
        "lng": 144.97544573818524,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 104,
        "lat": -37.80925727463567,
        "lng": 144.97188376461347,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 105,
        "lat": -37.811800145158244,
        "lng": 144.97557448421796,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 106,
        "lat": -37.81225785255195,
        "lng": 144.9776344207414,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 107,
        "lat": -37.81657696893482,
        "lng": 144.97870164369823,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 108,
        "lat": -37.81708549962601,
        "lng": 144.97925954317333,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 109,
        "lat": -37.821323119150826,
        "lng": 144.9678011462617,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 110,
        "lat": -37.81830595899197,
        "lng": 144.97895913576366,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 111,
        "lat": -37.8168481857394,
        "lng": 144.98039679979564,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 112,
        "lat": -37.815868113767394,
        "lng": 144.9830614672691,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 113,
        "lat": -37.820275649727385,
        "lng": 144.95126343699786,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 114,
        "lat": -37.8186823107144,
        "lng": 144.94888163539264,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 115,
        "lat": -37.82080110505168,
        "lng": 144.94913912745807,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 116,
        "lat": -37.8212757066455,
        "lng": 144.94787312480304,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 117,
        "lat": -37.81118976619539,
        "lng": 144.95031929942462,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 118,
        "lat": -37.809223271076995,
        "lng": 144.9490532967696,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 119,
        "lat": -37.80803656765059,
        "lng": 144.95182133647296,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 120,
        "lat": -37.806105274732964,
        "lng": 144.94989507399515,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 121,
        "lat": -37.8047659372185,
        "lng": 144.94914405547098,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 122,
        "lat": -37.80449453953959,
        "lng": 144.94951486587524,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 123,
        "lat": -37.803901288706044,
        "lng": 144.94712703429178,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 124,
        "lat": -37.80183287276174,
        "lng": 144.95008819304422,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 125,
        "lat": -37.801629418884055,
        "lng": 144.9530922671409,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 126,
        "lat": -37.80030695501874,
        "lng": 144.94989507399515,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 127,
        "lat": -37.798950557227364,
        "lng": 144.94854324065165,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 128,
        "lat": -37.800374774254486,
        "lng": 144.9483715792747,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 129,
        "lat": -37.8011716456102,
        "lng": 144.94768493376688,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 130,
        "lat": -37.7974754463576,
        "lng": 144.95270602904276,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 131,
        "lat": -37.79663046592157,
        "lng": 144.9564861199487,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 132,
        "lat": -37.7964749427808,
        "lng": 144.96599335283327,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 133,
        "lat": -37.796661455204436,
        "lng": 144.96891159624147,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 134,
        "lat": -37.796753998348855,
        "lng": 144.97324604600954,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 135,
        "lat": -37.7973813540776,
        "lng": 144.97526306718873,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 136,
        "lat": -37.79851736305472,
        "lng": 144.97549910158205,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 137,
        "lat": -37.79904297323707,
        "lng": 144.97629303545045,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 138,
        "lat": -37.800263730842836,
        "lng": 144.97594971269655,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 139,
        "lat": -37.802400008106474,
        "lng": 144.97652906984376,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 140,
        "lat": -37.8042310537262,
        "lng": 144.97725863069581,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 141,
        "lat": -37.80609596093379,
        "lng": 144.97468371004152,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 142,
        "lat": -37.80780824335318,
        "lng": 144.97464079469728,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 143,
        "lat": -37.81248328620422,
        "lng": 144.94945646920067,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 144,
        "lat": -37.81012691763072,
        "lng": 144.94741799034935,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 145,
        "lat": -37.809448812020946,
        "lng": 144.94683863320213,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 146,
        "lat": -37.80882155878758,
        "lng": 144.94604469933373,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 147,
        "lat": -37.809126709674764,
        "lng": 144.94587303795677,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 148,
        "lat": -37.81016082274773,
        "lng": 144.94574429192406,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 149,
        "lat": -37.81043206312342,
        "lng": 144.94621636071068,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 150,
        "lat": -37.81124577827211,
        "lng": 144.94681717553001,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 151,
        "lat": -37.81351735226738,
        "lng": 144.94979979195458,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 152,
        "lat": -37.81354931520682,
        "lng": 144.97389430129368,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 153,
        "lat": -37.81563435428812,
        "lng": 144.97194165313084,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 154,
        "lat": -37.813701881038774,
        "lng": 144.97438782775242,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 155,
        "lat": -37.80076656926903,
        "lng": 144.97069710814793,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 156,
        "lat": -37.804971217969054,
        "lng": 144.96893757903416,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 157,
        "lat": -37.81056574223849,
        "lng": 144.98292798125584,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 158,
        "lat": -37.79259394639045,
        "lng": 144.9834429653867,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 159,
        "lat": -37.80582977136442,
        "lng": 144.9793260879557,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 160,
        "lat": -37.80311715371738,
        "lng": 144.98088355767692,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 161,
        "lat": -37.80182862543232,
        "lng": 144.98161311852897,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 162,
        "lat": -37.800540074667914,
        "lng": 144.9825572561022,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 163,
        "lat": -37.797522065162966,
        "lng": 144.98398543660156,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 164,
        "lat": -37.79725077736974,
        "lng": 144.98196841542236,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 165,
        "lat": -37.79714904419043,
        "lng": 144.9807667857837,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 166,
        "lat": -37.796877755027324,
        "lng": 144.97780562703124,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 167,
        "lat": -37.798539385514474,
        "lng": 144.97814894978515,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 168,
        "lat": -37.799251501424415,
        "lng": 144.9796509868335,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 169,
        "lat": -37.8011504436216,
        "lng": 144.98372794453613,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 170,
        "lat": -37.801625171542945,
        "lng": 144.98274089161865,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 171,
        "lat": -37.802032078761286,
        "lng": 144.98274089161865,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 172,
        "lat": -37.796233439272086,
        "lng": 144.98553038899414,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 173,
        "lat": -37.795894323459535,
        "lng": 144.9845862514209,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 174,
        "lat": -37.79594930209236,
        "lng": 144.97992038726807,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 175,
        "lat": -37.794326275843744,
        "lng": 144.98239756886474,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 176,
        "lat": -37.79449583754348,
        "lng": 144.98364211384765,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 177,
        "lat": -37.79388541360319,
        "lng": 144.98608828846923,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 178,
        "lat": -37.79391932617663,
        "lng": 144.98776198689453,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 179,
        "lat": -37.79581840544537,
        "lng": 144.98733283345214,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 180,
        "lat": -37.79781916829386,
        "lng": 144.98698951069824,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 181,
        "lat": -37.803990671611906,
        "lng": 144.98302869604052,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 182,
        "lat": -37.80582167779575,
        "lng": 144.98225621984423,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 183,
        "lat": -37.80744920073768,
        "lng": 144.9801962833208,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 184,
        "lat": -37.80494008789245,
        "lng": 144.98474530981005,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 185,
        "lat": -37.806364189428486,
        "lng": 144.98465947912158,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 186,
        "lat": -37.80521134744512,
        "lng": 144.98723439977587,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 187,
        "lat": -37.8048722728486,
        "lng": 144.98920850561083,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 188,
        "lat": -37.80358377518398,
        "lng": 144.9907534580034,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 189,
        "lat": -37.797615703360655,
        "lng": 144.9897234897417,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 190,
        "lat": -37.79666619292922,
        "lng": 144.9915259341997,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 191,
        "lat": -37.798429559731034,
        "lng": 144.98980932043017,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 192,
        "lat": -37.80053198051956,
        "lng": 144.99350004003466,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 193,
        "lat": -37.800328523058525,
        "lng": 144.98963765905322,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 194,
        "lat": -37.80012506503708,
        "lng": 144.9874918918413,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 195,
        "lat": -37.806635443750324,
        "lng": 144.98950718996193,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 196,
        "lat": -37.80880544245594,
        "lng": 144.9881338989463,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 197,
        "lat": -37.80880544245594,
        "lng": 144.98607396242286,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 198,
        "lat": -37.810568519450044,
        "lng": 144.98658894655372,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 199,
        "lat": -37.810839758328065,
        "lng": 144.98899220583107,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 200,
        "lat": -37.81141613763552,
        "lng": 144.9907088196006,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 201,
        "lat": -37.80948355397406,
        "lng": 144.99173878786232,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 202,
        "lat": -37.81263669072808,
        "lng": 144.98362778780128,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 203,
        "lat": -37.81321804971717,
        "lng": 144.98817681429054,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 204,
        "lat": -37.81430296031752,
        "lng": 144.98796223756935,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 205,
        "lat": -37.81454028238616,
        "lng": 144.98594521639015,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 206,
        "lat": -37.81437076670069,
        "lng": 144.98864888307716,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 207,
        "lat": -37.81579468636135,
        "lng": 144.98766183015968,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 208,
        "lat": -37.81623541783314,
        "lng": 144.98564480898048,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 209,
        "lat": -37.814235153872076,
        "lng": 144.99506472704078,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 210,
        "lat": -37.81521834123575,
        "lng": 144.9948501503196,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 211,
        "lat": -37.81542175767622,
        "lng": 144.99287604448463,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 212,
        "lat": -37.81576078383146,
        "lng": 144.99253272173073,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 213,
        "lat": -37.81623541783314,
        "lng": 144.99545096513893,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 214,
        "lat": -37.81667614667369,
        "lng": 144.99459265825416,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 215,
        "lat": -37.81698126509886,
        "lng": 144.99459265825416,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 216,
        "lat": -37.817421989486526,
        "lng": 144.99197482225563,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 217,
        "lat": -37.82046949588583,
        "lng": 144.99175355916924,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 218,
        "lat": -37.81979148526904,
        "lng": 144.98977945333428,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 219,
        "lat": -37.82158819978754,
        "lng": 144.98952196126885,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 220,
        "lat": -37.822639088007165,
        "lng": 144.98977945333428,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 221,
        "lat": -37.82260518862074,
        "lng": 144.99256895070977,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 222,
        "lat": -37.82331707246608,
        "lng": 144.9939422417254,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 223,
        "lat": -37.82762212843657,
        "lng": 144.98903394478083,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 224,
        "lat": -37.82705098476832,
        "lng": 144.9935829712701,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 225,
        "lat": -37.82976272311062,
        "lng": 144.99130845802546,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 226,
        "lat": -37.82945765752209,
        "lng": 144.99242425697565,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 227,
        "lat": -37.828949212071734,
        "lng": 144.99474168556452,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 228,
        "lat": -37.83016947526665,
        "lng": 144.98701692360163,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 229,
        "lat": -37.828620245333035,
        "lng": 144.98502243719184,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 230,
        "lat": -37.82364639775614,
        "lng": 144.9696976902552,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 231,
        "lat": -37.825104036748186,
        "lng": 144.9699122669764,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 232,
        "lat": -37.824527764308705,
        "lng": 144.96729443097786,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 233,
        "lat": -37.82340910496283,
        "lng": 144.96527740979866,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 234,
        "lat": -37.82307011393463,
        "lng": 144.9642045261927,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 235,
        "lat": -37.82435827155835,
        "lng": 144.96278831983284,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 236,
        "lat": -37.82361249883238,
        "lng": 144.9610717060633,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 237,
        "lat": -37.82500234193879,
        "lng": 144.95998294482453,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 238,
        "lat": -37.82483285027838,
        "lng": 144.95843799243195,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 239,
        "lat": -37.82588369229791,
        "lng": 144.95689304003938,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 240,
        "lat": -37.825544712636216,
        "lng": 144.95586307177766,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 241,
        "lat": -37.82249382561325,
        "lng": 144.95204360614045,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 242,
        "lat": -37.821612434770906,
        "lng": 144.95118529925568,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 243,
        "lat": -37.82168023444015,
        "lng": 144.94968326220734,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 244,
        "lat": -37.81997607826449,
        "lng": 144.94582746782527,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 245,
        "lat": -37.82151424874816,
        "lng": 144.945330619812,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 246,
        "lat": -37.82126428988978,
        "lng": 144.94556997575984,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 247,
        "lat": -37.826111832134664,
        "lng": 144.94514082231746,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 248,
        "lat": -37.818653942954995,
        "lng": 144.94704333636966,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 249,
        "lat": -37.81443422576821,
        "lng": 144.95361941414194,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 250,
        "lat": -37.81463351108312,
        "lng": 144.94522476192475,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 251,
        "lat": -37.809162918809506,
        "lng": 144.94440937038422,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 252,
        "lat": -37.807399808253784,
        "lng": 144.94501018520356,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 253,
        "lat": -37.806586050722146,
        "lng": 144.94320774074555,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 254,
        "lat": -37.80716246323337,
        "lng": 144.94745635982514,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 255,
        "lat": -37.804619432999914,
        "lng": 144.94543933864594,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 256,
        "lat": -37.80229050544318,
        "lng": 144.94447231292725,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 257,
        "lat": -37.80055040248385,
        "lng": 144.94419479366303,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 258,
        "lat": -37.80214413280869,
        "lng": 144.94273567195893,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 259,
        "lat": -37.80248321993046,
        "lng": 144.94222068782807,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 260,
        "lat": -37.805128046052175,
        "lng": 144.94166278835297,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 261,
        "lat": -37.80030597117745,
        "lng": 144.94166278835297,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 262,
        "lat": -37.79847482825036,
        "lng": 144.94445228572846,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 263,
        "lat": -37.79732186311917,
        "lng": 144.9472967123527,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 264,
        "lat": -37.79538891061509,
        "lng": 144.94755420441814,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 265,
        "lat": -37.79562629347134,
        "lng": 144.95274696107097,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 266,
        "lat": -37.795456734366134,
        "lng": 144.9543348288078,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 267,
        "lat": -37.79389677233888,
        "lng": 144.95527896638103,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 268,
        "lat": -37.793727209264254,
        "lng": 144.95690974946208,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 269,
        "lat": -37.79396459745977,
        "lng": 144.9586345556613,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 270,
        "lat": -37.791997643674456,
        "lng": 144.96013659270963,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 271,
        "lat": -37.789607311694226,
        "lng": 144.95835535083373,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 272,
        "lat": -37.7898447131267,
        "lng": 144.95917074237425,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 273,
        "lat": -37.78780981895612,
        "lng": 144.95779745135863,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 274,
        "lat": -37.787402833397685,
        "lng": 144.95801202807982,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 275,
        "lat": -37.789262080203834,
        "lng": 144.96902292830018,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 276,
        "lat": -37.78946556814335,
        "lng": 144.97082537275818,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 277,
        "lat": -37.790177771518785,
        "lng": 144.972413240495,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 278,
        "lat": -37.79295418603359,
        "lng": 144.97187394866273,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 279,
        "lat": -37.79047849492524,
        "lng": 144.97651739658747,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 280,
        "lat": -37.788850598034266,
        "lng": 144.97922106327448,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 281,
        "lat": -37.78695133966778,
        "lng": 144.97840567173395,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 282,
        "lat": -37.7851537823247,
        "lng": 144.97591658176813,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 283,
        "lat": -37.78400060931022,
        "lng": 144.97424288334284,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 284,
        "lat": -37.7836953546181,
        "lng": 144.97261210026178,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 285,
        "lat": -37.782169062246204,
        "lng": 144.97033758701716,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 286,
        "lat": -37.78210122629813,
        "lng": 144.96874971928034,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 287,
        "lat": -37.77993044308748,
        "lng": 144.9674622589532,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 288,
        "lat": -37.77979476702006,
        "lng": 144.9723975235406,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 289,
        "lat": -37.78294917117417,
        "lng": 144.96651812137995,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 290,
        "lat": -37.78138894508452,
        "lng": 144.96394320072565,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 291,
        "lat": -37.77789527592807,
        "lng": 144.9650160843316,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 292,
        "lat": -37.778641510392355,
        "lng": 144.965445237774,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 293,
        "lat": -37.77598405191831,
        "lng": 144.9707252566889,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 294,
        "lat": -37.777510472003456,
        "lng": 144.97525275607504,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 295,
        "lat": -37.77822279059068,
        "lng": 144.97821391482748,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 296,
        "lat": -37.77866374627644,
        "lng": 144.97920096774496,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 297,
        "lat": -37.78082241642273,
        "lng": 144.98103095447257,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 298,
        "lat": -37.77824455966445,
        "lng": 144.98270465289787,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 299,
        "lat": -37.781195519821765,
        "lng": 144.983992113225,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 300,
        "lat": -37.7779053612931,
        "lng": 144.98765884380785,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 301,
        "lat": -37.7763789493616,
        "lng": 144.987143859677,
        "address": "",
        "capacity": 1,
        "isdumb": false,
        "threshold": 40,
        "fullness": 0.75
    },
    {
        "serial": 302,
        "lat": -37.77937000599125,
        "lng": 144.98856006603685,
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
