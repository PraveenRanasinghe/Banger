import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MakeBookingComponent } from './make-booking/make-booking.component';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {

  constructor(private bsModal:BsModalService) { }

  ngOnInit(): void {
  }

  openBooking(){
    this.bsModal.show(MakeBookingComponent,{
      class:'modal-dialog-centered modal-lg'
    })
  }
}
