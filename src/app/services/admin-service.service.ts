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

      return this.Http.post("http://localhost:8080/admin/addVehicle",vehicleInfo);
  }

  AddEquipment(itemName:string, pricePerDay:string,description:string){
    const equipmentInfo={
      itemName:itemName,
      itemDescription:description,
      pricePerDayEQ:pricePerDay
    };
    return this.Http.post("http://localhost:8080/admin/addEquipment",equipmentInfo);
  }



  viewAllInquiries(){
    return this.Http.get<any>("http://localhost:8080/admin/viewInquiries");
  }


  viewAllPendingUsers(){
    return this.Http.get<any>("http://localhost:8080/admin/viewPendingUsers");
  }

  viewAllUsers(){
    return this.Http.get<any>("http://localhost:8080/admin/viewAllUsers");
  }

  viewAllVehicles(){
    return this.Http.get<any>("http://localhost:8080/admin/viewAllVehicles");
  }

  viewAllEquipments(){
    return this.Http.get<any>("http://localhost:8080/admin/viewEquipments");
  }


  getInquiryById(){
    return this.Http.get<any>("http://localhost:8080/admin/getSingleInquiry/{{inquiryId}}");
  }

}
