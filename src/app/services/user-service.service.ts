import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private Http:HttpClient) { }

  userRegistration(fName:string, lName:string,emailAddress:string,contactNumber:string,nic:string,dob:string,password:string){
     const signUpInfo={
       fName:fName,
       lName:lName,
       email:emailAddress,
       contactNum:contactNumber,
       nicNumber:nic,
       dob:dob,
       password:password
     };
     return this.Http.post("http://localhost:8080/customer/createAccount",signUpInfo)
  }

  viewVehicles(){
    return this.Http.get<any>("http://localhost:8080/customer/viewAllVehicles");
  }

}
