import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }

  UserAuthentication(userEmail: String, password:String ){

    const pakaya = {
      username : userEmail,
      password:password
    };

    console.log("the object that i am sending to the damn server",pakaya);
    return this.Http.post("http://localhost:8080/authenticate", pakaya)
  }
}
