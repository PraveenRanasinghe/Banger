import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }

  UserAuthentication(userEmail: String, password:String ){
    return this.Http.post("http://localhost:8080/authenticate", {
      userEmail:userEmail,
      password:password
    })
  }
}
