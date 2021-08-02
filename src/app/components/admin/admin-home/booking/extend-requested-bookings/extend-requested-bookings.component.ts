import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-extend-requested-bookings',
  templateUrl: './extend-requested-bookings.component.html',
  styleUrls: ['./extend-requested-bookings.component.css']
})
export class ExtendRequestedBookingsComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) {
  }

  List:any;

  ngOnInit(): void {
    this. getAllBookings();
  }

  getAllBookings(){
    this.adminService.viewAllExtendRequestedBookings().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  hideForm() {
    this.modalRef.hide();
  }
}
