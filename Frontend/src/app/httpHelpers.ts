import { Observable, of } from 'rxjs';

export function handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); // log error to console
      return of(result as T);
    }
  }