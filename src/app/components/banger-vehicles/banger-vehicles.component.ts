import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GuestService } from 'src/app/services/guest.service';
import { OpenBookingComponent } from './open-booking/open-booking.component';

@Component({
  selector: 'app-banger-vehicles',
  templateUrl: './banger-vehicles.component.html',
  styleUrls: ['./banger-vehicles.component.css']
})
export class BangerVehiclesComponent implements OnInit {

  constructor(private guestService:GuestService,private bsModal: BsModalService) { }

  List:any;

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles(){
    this.guestService.viewVehicles().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  openBooking() {
    this.bsModal.show(OpenBookingComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered'
    })
  }

}
