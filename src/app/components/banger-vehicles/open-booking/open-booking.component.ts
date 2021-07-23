import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from '../../login/login.component';
import { SignUpComponent } from '../../sign-up/sign-up.component';

@Component({
  selector: 'app-open-booking',
  templateUrl: './open-booking.component.html',
  styleUrls: ['./open-booking.component.css']
})
export class OpenBookingComponent implements OnInit {

  constructor(private bsModal: BsModalRef,
    private bdM:BsModalService) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.bsModal.hide();
  }

  openSignUp() {
    this.bdM.show(SignUpComponent, {
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-lg',
    });
  }
  openLogin(){
    this.bdM.show(LoginComponent, {
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-lg',
    });
  }
}
