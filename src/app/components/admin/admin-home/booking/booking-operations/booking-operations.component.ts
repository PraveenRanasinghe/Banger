import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ViewAcceptedBookingsComponent } from '../view-accepted-bookings/view-accepted-bookings.component';
import { ViewCompletedBookingsComponent } from '../view-completed-bookings/view-completed-bookings.component';
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
  message:string;

  getMessage(){
    if (this.message === "New Equipment has been added to the system successfully!") {
      return "success";
    }
    else if( this.message ==='Equipment Name is Already Exists! Please Update the Quantity!'){
      return "danger";
    }
  }



  getAllBookings(){
    this.adminService.viewAllAcceptedBookings().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }


  viewAcceptedBookings(){
    this.bsModal.show(ViewAcceptedBookingsComponent,{
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-xl'
    })
  }

  viewCompletedBookings(){
    this.bsModal.show(ViewCompletedBookingsComponent,{
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

  reloadPage(){
    window.location.reload();
  }

  saveBookingStatus(bookingId:number, ChangeStatus:string){
         this.adminService.updateBookingStatus(bookingId,ChangeStatus).subscribe((data)=>{
          this.message= 'New Equipment has been added to the system successfully!'
           console.log(data);
         })
  }


}
