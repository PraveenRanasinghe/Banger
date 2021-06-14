import {Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MakeBookingComponent } from './view-vehicles/make-booking/make-booking.component';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private bsModal: BsModalService) {
  }

  ngOnInit(): void {
  }
// openBooking() {
//     this.bsModal.show(MakeBookingComponent, {
//       class: 'modal-dialog-centered modal-lg'
//     })
//   }
}
