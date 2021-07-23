import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-extend-booking',
  templateUrl: './extend-booking.component.html',
  styleUrls: ['./extend-booking.component.css']
})
export class ExtendBookingComponent implements OnInit {
  constructor(private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }
}
