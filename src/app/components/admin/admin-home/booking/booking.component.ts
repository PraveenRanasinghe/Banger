import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {AcceptComponent} from './accept/accept.component';
import {RejectComponent} from './reject/reject.component';
import { UInfoComponent } from './u-info/u-info.component';
import { ViewAcceptedBookingsComponent } from './view-accepted-bookings/view-accepted-bookings.component';
import { ViewRejectedBookingsComponent } from './view-rejected-bookings/view-rejected-bookings.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private bsModal: BsModalService,
    private adminService:AdminServiceService) {
  }

  List:any;

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(){
    this.adminService.viewAllPendingBookings().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  openAccept(bookingId:number) {
    this.bsModal.show(AcceptComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered',
      initialState: {
        bookingId:bookingId
     },
    })
    console.log(bookingId);
  }

  openReject() {
    this.bsModal.show(RejectComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered'
    })
  }

  openUserInfo(email:string){
    this.bsModal.show(UInfoComponent,{
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg',
      initialState: {
         userInfo:email
      },
    })
  }

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
