  /**
   * Definition of environment variables - this is the default definition file used during building,
   * and should be treated as the one targeted by development builds (such as the GH Pages build)
   * 
   * Servicefetcher mode should be 1 or 2 (eg: not expecting an actual backend to query from)
   * 
   * Author name:   Rithesh R Jayaram "MolarFox"
   * Student ID:    29687284
   * Last modified: 24-10-2020
   */

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Service fetcher mode is used by services to determine how they should source data to serve requests
  serviceFetcherModes: 1      // 0 = fetch from actual server, 1 = fetch from github, 2 = use static dummy data
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
