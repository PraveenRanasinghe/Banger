import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private Http:HttpClient) { }

  userRegistration(fName:string, lName:string,emailAddress:string,contactNumber:string,nic:string,dob:string,password:string,licenceImg:File,profileImage:File,utilityBill:File){
     const signUpInfo={
       fName:fName,
       lName:lName,
       email:emailAddress,
       contactNum:contactNumber,
       nicNumber:nic,
       dob:dob,
       password:password,
      //  licenceImg:licenceImg,
      //  profileImage:profileImage
     };

     const formData : FormData = new FormData();
     formData.append('signUpInfo',JSON.stringify(signUpInfo));
     formData.append('licenceImg',licenceImg);
     formData.append('profileImage',profileImage);
     formData.append('utilityBill',utilityBill);

     return this.Http.post("http://localhost:8080/customer/createAccount",formData);

  }


  updateUserProfile(email:string,fName:string,lName:string, contactNumber:string,nic:string,licenceImg:File,profileImage:File,utilityBill:File){
    const updatedInfo={
      email:email,
      fName:fName,
      lName:lName,
      contactNum:contactNumber,
      nicNumber:nic,
    };
    const formData : FormData= new FormData();
    formData.append('',JSON.stringify(updatedInfo));
    formData.append('utilityBill',utilityBill);

    return this.Http.put("http://localhost:8080/customer/userUpdateProfile/"+email,formData);
  }


  userMakeABooking(vehicleId:number,email:string,pickupTime:string, returnTime:string){
    const makeBooking={
      vehicleId:vehicleId,
      email:email,
      pickupTime:pickupTime,
      returnTime:returnTime,
    }
    console.log(makeBooking);
    return this.Http.post("http://localhost:8080/customer/makeBooking",makeBooking);
  }

  viewVehicles(){
    return this.Http.get<any>("http://localhost:8080/customer/viewAllVehicles").pipe(map((item)=>{
      item.forEach(element => {
        element.vehicleImg=`data:image/jpeg;base64,${element.vehicleImg}`;
      })
      return item;
    }))
  }

  getEquipmentList(){
    return this.Http.get<any>("http://localhost:8080/customer/getEquipmentList");
  }

  getLoggedInUser(email:string){
    return this.Http.get<any>("http://localhost:8080/customer/getLoggedInUser/"+email);
  }

  getVehicleById(vId:number){
    return this.Http.get<any>("http://localhost:8080/customer/getSingleVehicle/"+vId);
  }

  getEquipmentById(equipId:number){
    return this.Http.get<any>("http://localhost:8080/customer/getEquipment/"+equipId);
  }


}
