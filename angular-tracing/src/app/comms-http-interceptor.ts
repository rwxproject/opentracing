import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CommsHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('something', 'here')
    });
    return next.handle(modifiedReq).pipe(
      tap(val => {
        if (val.type === HttpEventType.Sent) {
          console.log('[REQ]');
        }
        if (val.type === HttpEventType.Response) {
          console.log('[RES]', val);
        }
      })
    );
  }
}
