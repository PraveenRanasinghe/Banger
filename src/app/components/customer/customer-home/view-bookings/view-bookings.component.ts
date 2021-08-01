import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserServiceService } from 'src/app/services/user-service.service';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ExtendBookingComponent } from './extend-booking/extend-booking.component';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  constructor(private bsModal: BsModalService,
    private customerService :UserServiceService) {
  }

  email:any;
  List:any;
  userInfo:any;

  ngOnInit(): void {
    this.getMyBookings();
  }

  openExtendBooking() {
    this.bsModal.show(ExtendBookingComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg'
    })
  }

  bookingHistory(){
    this.bsModal.show(BookingHistoryComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-xl'
    })
  }

  getMyBookings(){
    this.customerService.getMyBookings(JSON.parse(sessionStorage.getItem("data")).email).subscribe((data)=>{
    console.log(data);
    this.List=data;
    })
  }
}
