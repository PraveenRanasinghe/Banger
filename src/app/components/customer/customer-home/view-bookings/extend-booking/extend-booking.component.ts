import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-extend-booking',
  templateUrl: './extend-booking.component.html',
  styleUrls: ['./extend-booking.component.css']
})
export class ExtendBookingComponent implements OnInit {
  constructor(private modalRef: BsModalRef,
    private customerService :UserServiceService) {

  }

  bookingId:any;

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  extendBooking(){
    this.customerService.requestLateReturn(this.bookingId).subscribe((data)=>{
      console.log(data);
    })
  }

  reloadPage(){
    window.location.reload();
  }
}
