import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import { UserServiceService } from 'src/app/services/user-service.service';
import {MakeBookingComponent} from './make-booking/make-booking.component';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {

  List:any;

  constructor(private bsModal: BsModalService,private userService:UserServiceService) {
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }


  getAllVehicles(){
    this.userService.viewVehicles().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  openBooking() {
    this.bsModal.show(MakeBookingComponent, {
      class: 'modal-dialog-centered modal-lg'
    })
  }
}
