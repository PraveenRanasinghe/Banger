import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService{

  constructor(private Http:HttpClient) {}

  AddVehicle(vehicleType:string, vehicleModel:string,
     seat:string, fuelType:string, pricePerDay:string, transmission:string,airbags:string,ac:string,vehicleImage:File){

      const vehicleInfo={
        vehicleType:vehicleType,
        vehicleModel:vehicleModel,
        numOfSeats:seat,
        fuelType:fuelType,
        pricePerDay:pricePerDay,
        transmissionType:transmission,
        airBag:airbags,
        ac:ac
      };

    const formData: FormData = new FormData();
    formData.append('vehicleInfo', JSON.stringify(vehicleInfo));
    formData.append('vehicleImage', vehicleImage);

      return this.Http.post("http://localhost:8080/admin/addVehicle",formData);
  }



  AddEquipment(itemName:string, pricePerDay:string,description:string,quantity:number){
    const equipmentInfo={
      itemName:itemName,
      itemDescription:description,
      pricePerDayEQ:pricePerDay,
      quantity:quantity
    };
    return this.Http.post("http://localhost:8080/admin/addEquipment",equipmentInfo);
  }



  viewAllInquiries(){
    return this.Http.get<any>("http://localhost:8080/admin/viewInquiries");
  }


  viewAllPendingUsers(){
    return this.Http.get<any>("http://localhost:8080/admin/viewPendingUsers");
  }

  viewAllPendingBookings(){
    return this.Http.get<any>("http://localhost:8080/admin/viewAllBookings");
  }

  viewAllAcceptedBookings(){
    return this.Http.get("http://localhost:8080/admin/viewAcceptedBookings");
  }

  viewAllRejectedBookings(){
    return this.Http.get("http://localhost:8080/admin/viewRejectedBookings");
  }

  viewAllUsers(){
    return this.Http.get<any>("http://localhost:8080/admin/viewAllUsers");
  }

  viewAllVehicles(){
    return this.Http.get<any>("http://localhost:8080/admin/viewAllVehicles").pipe(map((item)=>{
      item.forEach(element => {
        element.vehicleImg=`data:image/jpeg;base64,${element.vehicleImg}`;
      })
      return item;
    }))
  }

  viewAllEquipments(){
    return this.Http.get<any>("http://localhost:8080/admin/viewEquipments");
  }


  getInquiryById(inqId:number){
    return this.Http.get<any>("http://localhost:8080/admin/getSingleInquiry/"+inqId);
  }

  removeInquiry(inqId:number){
    return this.Http.delete("http://localhost:8080/admin/removeInquiry/"+inqId);
  }

  removeEquipment(equipId:number){
    return this.Http.delete("http://localhost:8080/admin/removeEquipment/"+equipId);
  }

  removeVehicle(vehicleId:number){
    return this.Http.delete("http://localhost:8080/admin/removeVehicle/"+vehicleId);
  }


  removeUser(email:string){
    return this.Http.delete("http://localhost:8080/admin/removeUser/"+email);
  }

  getUserByID(email:string){
    return this.Http.get<any>("http://localhost:8080/admin/getSingleUser/"+email).pipe(map((item)=>{
        item.licenceImg=`data:image/jpeg;base64,${item.licenceImg}`,
        item.profileImage=`data:image/jpeg;base64,${item.profileImage}`,
        item.utilityBill=`data:image/jpeg;base64,${item.utilityBill}`;

      return item;
    }));
  }


  updateVehicleDetails(vehicleId:number, ac:string, airBag:string, transmissionType:string,pricePerDay:string,fuelType:string){
    const updateInfo={
      vehicleId:vehicleId,
      ac:ac,
      airBag:airBag,
      transmissionType:transmissionType,
      pricePerDay:pricePerDay,
      fuelType:fuelType
    }
    return this.Http.put("http://localhost:8080/admin/updateVehicle/"+vehicleId,updateInfo);
  }

  updateEquipmentDetails(equipmentId:number, pricePerDayEQ:string,itemDescription:string, quantity:number){
    const updateInfo={
      equipmentId:equipmentId,
      pricePerDayEQ:pricePerDayEQ,
      itemDescription:itemDescription,
      quantity:quantity
    }
    return this.Http.put("http://localhost:8080/admin/updateEquipment/"+equipmentId,updateInfo);
  }


  acceptUserAccount(email:string, status:string){
    const acceptingUserAccount={
      email:email,
      status:status
    }
    return this.Http.put("http://localhost:8080/admin/acceptUser/"+email,acceptingUserAccount);
  }

  acceptBooking(bookingId:number){
    const acceptBooking={
      bookingId:bookingId,
    }
    return this.Http.post("http://localhost:8080/admin/acceptBooking",acceptBooking);
  }


  rejectBooking(bookingId:number){
    const rejectBooking={
      bookingId:bookingId,
    }
    return this.Http.post("http://localhost:8080/admin/rejectBooing",rejectBooking);
  }

  getVehicleById(vId:number){
    return this.Http.get<any>("http://localhost:8080/admin/getSingleVehicle/"+vId);
  }

  getEquipmentById(equipId:number){
    return this.Http.get<any>("http://localhost:8080/admin/getSingleEquipment/"+equipId);
  }

  getBookingById(bookingId:number){
    return this.Http.get<any>("http://localhost:8080/admin/getBooking/"+bookingId);
  }

  getLoggedInUser(email:string){
    return this.Http.get<any>("http://localhost:8080/admin/getLoggedInUser/"+email);
  }

}
