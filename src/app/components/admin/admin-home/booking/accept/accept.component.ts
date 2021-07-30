import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) {
  }

  bookingId:any;
  acceptBookingForm:FormGroup
  selectedBooking:any

  ngOnInit(): void {
    console.log(this.bookingId);
  }

  hideForm() {
    this.modalRef.hide();
  }

  reloadPage(){
    window.location.reload();
  }

  acceptBooking(){
    this.adminService.acceptBooking(this.bookingId).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

}
