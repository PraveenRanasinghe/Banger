import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ViewAcceptedBookingsComponent } from '../view-accepted-bookings/view-accepted-bookings.component';
import { ViewRejectedBookingsComponent } from '../view-rejected-bookings/view-rejected-bookings.component';

@Component({
  selector: 'app-booking-operations',
  templateUrl: './booking-operations.component.html',
  styleUrls: ['./booking-operations.component.css']
})
export class BookingOperationsComponent implements OnInit {

  constructor(private bsModal: BsModalService,
    private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  List:any;

  getAllBookings(){
    this.adminService.viewAllAcceptedBookings().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  // changeStatus(){
  //   const bookingStatus:string=
  // }

  viewAcceptedBookings(){
    this.bsModal.show(ViewAcceptedBookingsComponent,{
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-xl'
    })
  }

  viewRejectedBookings(){
    this.bsModal.show(ViewRejectedBookingsComponent,{
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-xl'
    })
  }


}
