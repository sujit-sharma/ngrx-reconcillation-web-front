import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.needSkip(request.url)) {
      console.log('skipped by Interceptor for ' + request.url);
      return next.handle(request);
    }
    const authorizedRequest = request.clone( {
      setHeaders: {
        Authorization: `${localStorage.getItem('authToken')}`,

      }
    });
    console.log('Authorization token added in request by Interceptor');
    return next.handle(authorizedRequest);
  }


  private needSkip(url: string): boolean {
    console.log('Checking Url to intercept request');
    const positionToSkip = url.indexOf('/login');
    return positionToSkip > 0;
  }
}
