import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService{

  constructor(private Http:HttpClient) {}

  AddVehicle(vehicleType:string, vehicleModel:string,
     seat:string, fuelType:string, pricePerDay:string, transmission:string,airbags:string,ac:string){

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

      return this.Http.post("http://localhost:8080/addVehicle",vehicleInfo);
  }

  AddEquipment(itemName:string, pricePerDay:string,description:string){
    const equipmentInfo={
      itemName:itemName,
      itemDescription:description,
      pricePerDayEQ:pricePerDay
    };
    return this.Http.post("http://localhost:8080/admin/addEquipment",equipmentInfo);
  }



  ViewAllInquiries(){
    return this.Http.get<any>("http://localhost:8080/admin/viewInquiries");
  }

  ViewAllUsers(){
    return this.Http.get<any>("http://localhost:8080/admin/viewAllUsers");
  }
}
