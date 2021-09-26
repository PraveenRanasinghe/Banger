import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private userService:UserServiceService) {
  }

  bookingId:any;

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  reloadPage(){
    window.location.reload();
  }

  rejectBooking(){
    this.userService.removeBooking(this.bookingId).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }
}
