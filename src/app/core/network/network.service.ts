import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, take } from 'rxjs/operators';
import { IRequestOptions } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private baseUrl: string = environment.baseUrl;

  constructor (
    readonly http: HttpClient,
  ) { }

  public get<Type> (endpoint: string, options?: IRequestOptions): Observable<Type> {
    return this.http.get<Type>(this.getUrl(endpoint), options as Type).pipe(
      this.error()
    );
  }

  public post<Type> (endpoint: string, body: Type, options?: IRequestOptions): Observable<Type> {
    return this.http.post<Type>(this.getUrl(endpoint), body, options as Type).pipe(
      this.error()
    );
  }
  private getUrl (endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }
  private readonly error = <T, R>() => (
    take<T>(1),
    catchError<T, Observable<R>>((error: HttpErrorResponse) => {
      this.handleError(error);
      return throwError(() => error);
    })
  )

  private handleError (error: HttpErrorResponse): void {
    console.log('Error', error?.message || 'Something Bad Happened', undefined, undefined, 5000);
  }
}
