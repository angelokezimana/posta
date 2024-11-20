import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebApiService {
  private BASE_URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * GET
   */
  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      }),
      observe: 'response' as 'body',
    };

    return this.http.get(this.BASE_URL + url, httpOptions).pipe(
      map((response: any) => response),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  /**
   * POST
   */
  post(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
    };

    return this.http.post(this.BASE_URL + url, model, httpOptions).pipe(
      map((response: any) => response),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  /**
   * PUT
   */
  put(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response' as 'body',
    };

    return this.http.put(this.BASE_URL + url, model, httpOptions).pipe(
      map((response: any) => response),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  /**
   * DELETE
   */
  delete(url: string, model: any): Observable<any> {
    return this.http.delete(this.BASE_URL + url, model).pipe(
      map((response: any) => response),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
