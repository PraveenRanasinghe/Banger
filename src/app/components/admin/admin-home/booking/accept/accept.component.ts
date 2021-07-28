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
    this.getBookingById();
  }

  hideForm() {
    this.modalRef.hide();
  }

  getBookingById(){
    this.adminService.getBookingById(this.bookingId).subscribe((data)=>{
      console.log(data);
      this.selectedBooking=data;
      this.acceptBookingForm.patchValue({
        'status':data.status
      })
    })
  }

  acceptBooking(bookingId:number){
    this.adminService.acceptBooking(bookingId,'Accepted').subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

}
