import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {

  bookingForm: FormGroup;
  message:string;

  constructor(private modalRef: BsModalRef,
    private spinner: NgxSpinnerService,
    private customerService:UserServiceService) {
  }

  ngOnInit(): void {
    this.bookingInfo();
  }

  bookingInfo(){
    this.bookingForm=new FormGroup({
      'pickupTime':new FormControl('', Validators.required),
      'returnTime':new FormControl('', Validators.required),
    })
  }

  onBooking(){
    try{
      this.message=undefined;
      this.spinner.show();

      if(this.bookingForm.valid){
        const pickupTime:string=this.bookingForm.get('pickupTime').value;
        const returnTime:string=this.bookingForm.get('returnTime').value;
        const equipments: number=this.bookingForm.get('equipments').value;
        const vehicleId:number=this.bookingForm.get('vehicleId').value;
        const email:string=this.bookingForm.get('email').value;

        this.customerService.userMakeABooking(vehicleId,pickupTime,returnTime,email,equipments).subscribe(
          (data:any)=>{
            console.log(data);
            this.message='Booking Successfull!'
            this.spinner.hide();
            this.bookingForm.reset();
            localStorage.setItem('token',data.token);
          },
          (error)=>{
            console.log("Cannot make the booking!",error);
          }
        )
      }
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
