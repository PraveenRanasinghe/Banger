import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bsModal : BsModalService,
    private modalRef:BsModalRef) { }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  openSignUp(){
    this.bsModal.show(SignUpComponent,{
      class:'modal-dialog-centered modal-lg'
    })
  }

}
