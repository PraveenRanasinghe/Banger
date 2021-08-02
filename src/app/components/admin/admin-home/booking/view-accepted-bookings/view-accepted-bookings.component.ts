import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-view-accepted-bookings',
  templateUrl: './view-accepted-bookings.component.html',
  styleUrls: ['./view-accepted-bookings.component.css']
})
export class ViewAcceptedBookingsComponent implements OnInit {

  constructor(private modalRef: BsModalRef,

    private adminService:AdminServiceService) {
  }

  List:any;

  ngOnInit(): void {
    this. getAllBookings();
  }

  getAllBookings(){
    this.adminService.viewAllCollectedBookings().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  saveBookingStatus(bookingId:number, ChangeStatus:string){
    this.adminService.updateBookingStatus(bookingId,ChangeStatus).subscribe((data)=>{
      console.log(data);
    })
  }

  reloadPage(){
    window.location.reload();
  }

  hideForm() {
    this.modalRef.hide();
  }
}
