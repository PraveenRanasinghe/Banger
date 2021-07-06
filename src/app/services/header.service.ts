import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

    ];

    let needToken: boolean = false;

    for (const CheckedUrl of noNeedToken) {
      if (CheckedUrl.toLowerCase() === req.url.toLowerCase()) {
        needToken = false;
      }else{
        needToken = true;
        break;
      }
    }

    if (!needToken) {
      console.log('Token!');
      req = req.clone({
        headers: req.headers.append(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      });
    }
    return next.handle(req);
  }
}
