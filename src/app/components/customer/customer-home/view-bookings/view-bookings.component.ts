import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ExtendBookingComponent } from './extend-booking/extend-booking.component';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  constructor(private bsModal: BsModalService) {
  }

  ngOnInit(): void {
  }

  openExtendBooking() {
    this.bsModal.show(ExtendBookingComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg'
    })
  }
}
