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
    const ටෝකන්එපාමේවට = [
      'http://localhost:8080/authenticate',
      'http://localhost:8080/createAccount',
    ];

    let ටෝකන්_ඕනෙද: boolean = false;

    for (const checkKaranaUrleka of ටෝකන්එපාමේවට) {
      if (checkKaranaUrleka.toLowerCase() === req.url.toLowerCase()) {
        ටෝකන්_ඕනෙද = false;
      }else{
        ටෝකන්_ඕනෙද = true;
      }
    }

    if (!ටෝකන්_ඕනෙද) {
      console.log('ඔන්න මචන් ටෝකන් එක');
      req = req.clone({
        headers: req.headers.append(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      });
      return next.handle(req);
    }
    return next.handle(req);
  }
}
