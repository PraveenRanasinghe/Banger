import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-view-completed-bookings',
  templateUrl: './view-completed-bookings.component.html',
  styleUrls: ['./view-completed-bookings.component.css']
})
export class ViewCompletedBookingsComponent implements OnInit {

  constructor(private modalRef: BsModalRef,

    private adminService:AdminServiceService) {
  }

  List:any;

  ngOnInit(): void {
    this. getAllBookings();
  }

  getAllBookings(){
    this.adminService.viewAllCompletedBookings().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  hideForm() {
    this.modalRef.hide();
  }
}
