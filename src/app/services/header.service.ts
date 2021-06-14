import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url!="http://localhost:8080/authenticate"){
      req = req.clone({
        headers:req.headers.append("Authorization","Bearer " + localStorage.getItem("token"))
      })

      return next.handle(req);
    }
return next.handle(req);

}
}
