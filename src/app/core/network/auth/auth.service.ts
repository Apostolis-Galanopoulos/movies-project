import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthService implements HttpInterceptor {
  private api_key: string = environment.api_key;
  intercept <Type> (req: HttpRequest<Type>, next: HttpHandler):   Observable<HttpEvent<Type>> {
    const newReq = req.clone({
      params: (req.params ? req.params : new HttpParams())
                 .set('api_key', this.api_key)
    });

    return next.handle(newReq);
  }
}
