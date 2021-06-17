import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private Http:HttpClient) { }

  addInquiry(fullName:string,contactNum:string, email:string,message:string){
    const inquiryInfo={
      fullName:fullName,
      email:email,
      contactNum:contactNum,
      message:message
    };

    return this.Http.post("http://localhost:8080/addInq",inquiryInfo);
  }
}
