import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root',
})
export class HeaderService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const noNeedToken = [
      'http://localhost:8080/authenticate',
      'http://localhost:8080/customer/createAccount',
      'http://localhost:8080/customer/addInq',
      'http://localhost:8080/guestViewVehicles'

    ];

    let needToken: boolean = true;

    for (const CheckedUrl of noNeedToken) {
      if (CheckedUrl.toLowerCase() === req.url.toLowerCase()) {
        needToken = false;
      }
    }

    if (needToken) {
      req = req.clone({
        headers: req.headers.append(
          'Authorization',
          'Bearer ' + sessionStorage.getItem('jwttoken')
        ),
      });
    }
    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error.status);
      return throwError(error);
    }));
  }
}
