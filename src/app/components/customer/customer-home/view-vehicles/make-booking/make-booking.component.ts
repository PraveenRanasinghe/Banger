import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {

  constructor(private modalRef:BsModalRef) { }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }
}
