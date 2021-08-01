import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private customerService:UserServiceService) {
  }

  List:any;

  ngOnInit(): void {
    this. getMyBookings();
  }



  getMyBookings(){
    this.customerService.getMyPreviousBookings(JSON.parse(sessionStorage.getItem("data")).email).subscribe((data)=>{
    console.log(data);
    this.List=data;
    })
  }

  hideForm() {
    this.modalRef.hide();
  }
}
