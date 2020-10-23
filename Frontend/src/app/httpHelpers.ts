import { Observable, of } from 'rxjs';

// Generalised HTTP error handler I made to deal with any response failures
export function handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      return of(result as T);
    }
  }