import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private Http: HttpClient) { }

  userRegistration(fName: string, lName: string, emailAddress: string, contactNumber: string, nic: string, dob: string, password: string, licenceImg: File, profileImage: File, utilityBill: File) {
    const signUpInfo = {
      fName: fName,
      lName: lName,
      email: emailAddress,
      contactNum: contactNumber,
      nicNumber: nic,
      dob: dob,
      password: password,
    };

    const formData: FormData = new FormData();
    formData.append('signUpInfo', JSON.stringify(signUpInfo));
    formData.append('licenceImg', licenceImg);
    formData.append('profileImage', profileImage);
    formData.append('utilityBill', utilityBill);

    return this.Http.post("http://localhost:8080/customer/createAccount", formData);

  }


  updateUserProfile(email: string, fName: string, lName: string, contactNumber: string, utilityBill: File, licenceImg: File) {
    const updatedInfo = {
      email: email,
      fName: fName,
      lName: lName,
      contactNum: contactNumber,
    };
    const formData: FormData = new FormData();
    formData.append('updatedInfo', JSON.stringify(updatedInfo));
    formData.append('utilityBill', utilityBill);
    formData.append('licenceImg', licenceImg);

    return this.Http.put("http://localhost:8080/customer/userUpdateProfile", formData);
  }

  userMakeABooking(makeBooking: {
    vehicleId: number,
    email: string,
    pickupTime: Date,
    returnTime: Date,
    price: number,
    equipments: any
  },) {
    return this.Http.post("http://localhost:8080/customer/makeBooking", makeBooking);
  }


  viewVehicles(email:string) {
    return this.Http.get<any>("http://localhost:8080/customer/viewAllVehicles/"+email).pipe(map((item) => {
      item.forEach(element => {
        element.vehicleImg = `data:image/jpeg;base64,${element.vehicleImg}`;
      })
      return item;
    }))
  }

  getEquipmentList() {
    return this.Http.get<any>("http://localhost:8080/customer/getEquipmentList");
  }

  getLoggedInUser(email: string) {
    return this.Http.get<any>("http://localhost:8080/customer/getLoggedInUser/" + email);
  }

  getVehicleById(vId: number) {
    return this.Http.get<any>("http://localhost:8080/customer/getSingleVehicle/" + vId);
  }

  getEquipmentById(equipId: number) {
    return this.Http.get<any>("http://localhost:8080/customer/getEquipment/" + equipId);
  }

  getMyBookings(email: string) {
    return this.Http.get<any>("http://localhost:8080/customer/viewMyBookings/" + email);
  }

  getMyPendingBookings(email:string){
    return this.Http.get<any>("http://localhost:8080/customer/viewMyPBookings/" + email);
  }

  getMyPreviousBookings(email: string) {
    return this.Http.get<any>("http://localhost:8080/customer/viewMyPreviousBookings/" + email);
  }

  requestLateReturn(bookingId: number) {
    const requestLateReturn = {
      bookingId: bookingId,
    }
    return this.Http.put("http://localhost:8080/customer/requestLateReturn", requestLateReturn);
  }

  searchVehicleByPickupTimeAndReturnTime(pickupTime: string, returnTime: string) {
    const requestInfo = {
      pickupTime: pickupTime,
      returnTime: returnTime
    }
    const formData: FormData = new FormData();

    return this.Http.post("http://localhost:8080/customer/searchVehicles/", requestInfo);
  }


  removeBooking(bookingId:number){
    return this.Http.delete("http://localhost:8080/customer/cancelBooking/"+bookingId);
  }

}
