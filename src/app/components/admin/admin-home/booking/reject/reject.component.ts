import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) {
  }

  bookingId:any;
  email:any;

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  reloadPage(){
    window.location.reload();
  }

  rejectBooking(){
    this.adminService.rejectBooking(this.bookingId,this.email).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }
}
