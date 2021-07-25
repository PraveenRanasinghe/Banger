import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {AcceptComponent} from './accept/accept.component';
import {RejectComponent} from './reject/reject.component';
import { UInfoComponent } from './u-info/u-info.component';

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

  openAccept() {
    this.bsModal.show(AcceptComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered'
    })
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

}
