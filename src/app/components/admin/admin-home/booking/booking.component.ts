import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AcceptComponent } from './accept/accept.component';
import { RejectComponent } from './reject/reject.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private bsModal:BsModalService) { }

  ngOnInit(): void {
  }

  openAccept(){
    this.bsModal.show(AcceptComponent,{
      class:'modal-dialog-centered'
    })
  }

  openReject(){
    this.bsModal.show(RejectComponent,{
      class:'modal-dialog-centered'
    })
  }

}
