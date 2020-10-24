/**
 * File for any generic HTTP functions and snippets
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { Observable, of } from 'rxjs';

// Generalised HTTP error handler I made to deal with any response failures
export function handleError<T>(operation = 'operation', result?: T){
  /**
   * Logs a HTTP method failure and returns the server response
   * @param {string} operation name of the operation attempted, which failed
   * @param {result?} result result of the operation, if any
   * @return {result?} Returns response, if available, whatever type it may be
   */
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      return of(result as T);
    }
  }