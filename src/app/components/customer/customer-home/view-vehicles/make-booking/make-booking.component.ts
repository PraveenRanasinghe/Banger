import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {

  bookingForm: FormGroup;
  message:string;
  equipList:any;
  userInfo:any;
  selectedVehicle:any;
  vId:number;

  constructor(private modalRef: BsModalRef,
    private spinner: NgxSpinnerService,
    private customerService:UserServiceService) {
  }


  ngOnInit(): void {
    this.bookingInfo();
    this.getEquipmentListToModal();
    this.getLoggedInUser();
    this.getSelectedVehicle();
  }


  getEquipmentListToModal(){
    this.customerService.getEquipmentList().subscribe((data)=>{
      console.log(data);
      this.equipList=data;
    })
  }

  getLoggedInUser(){
    this.customerService.getLoggedInUser(JSON.parse(sessionStorage.getItem("data")).email).subscribe((data)=>{
      console.log(data);
      this.userInfo=data;
    })
  }

  getSelectedVehicle(){
    this.customerService.getVehicleById(this.vId).subscribe((data)=>{
      this.selectedVehicle=data;
      console.log(this.vId);
    })
  }

  bookingInfo(){
    this.bookingForm=new FormGroup({
      'pickupTime':new FormControl('', Validators.required),
      'returnTime':new FormControl('', Validators.required),
    })
  }

  addEquipments(){

  }

  onBooking(){
    try{
      this.message=undefined;
        const pickupTime:string=this.bookingForm.get('pickupTime').value;
        const returnTime:string=this.bookingForm.get('returnTime').value;

        console.log(this.userInfo.email);
        this.customerService.userMakeABooking(this.selectedVehicle.vehicleId,this.userInfo.email,pickupTime,returnTime).subscribe(
          (data:any)=>{
            console.log(data);
            this.message='Booking Successfull!'
            this.bookingForm.reset();
          },
        )
      }

    catch(error){
      this.message = 'An Unexpected Error Occurred. Please Try Again !';
    }
  }

  getMessage(){
    if (this.message === "Booking Successfull!") {
      return "success";
    }
    else {
      return "danger";
    }
  }


  hideForm() {
    this.modalRef.hide();
  }
}
