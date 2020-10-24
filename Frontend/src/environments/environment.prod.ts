/**
 * Definition of environment variables - this is the production definition file
 * 
 * Servicefetcher mode should be 0 (eg: expecting full-stack deployment with a backend present)
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

// NB: Github pages builds should not build to production!
export const environment = {
  production: true,
  serviceFetcherModes: 0      // 0 = fetch from actual server, 1 = fetch from github, 2 = use static dummy data
};
