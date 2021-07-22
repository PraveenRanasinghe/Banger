import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private Http:HttpClient) { }

  addInquiry(fullName:string,contactNum:string, email:string,message:string){
    const inquiryInfo={
      inquirerName:fullName,
      inquirerEmail:email,
      contactNum:contactNum,
      message:message
    };

    return this.Http.post("http://localhost:8080/customer/addInq",inquiryInfo);
  }

  viewVehicles(){
    return this.Http.get<any>("http://localhost:8080/guestViewVehicles").pipe(map((item)=>{
      item.forEach(element => {
        element.vehicleImg=`data:image/jpeg;base64,${element.vehicleImg}`;
      })
      return item;
    }))
  }


}
