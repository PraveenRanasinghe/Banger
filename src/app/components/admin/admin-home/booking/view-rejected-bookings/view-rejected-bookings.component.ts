import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-view-rejected-bookings',
  templateUrl: './view-rejected-bookings.component.html',
  styleUrls: ['./view-rejected-bookings.component.css']
})
export class ViewRejectedBookingsComponent implements OnInit {

  constructor(private modalRef: BsModalRef,

    private adminService:AdminServiceService) {
  }

  List:any;

  ngOnInit(): void {
    this. getAllBookings();
  }

  getAllBookings(){
    this.adminService.viewAllPendingBookings().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  hideForm() {
    this.modalRef.hide();
  }
}
