import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {LoginComponent} from '../../login/login.component';
import {SignUpComponent} from '../../sign-up/sign-up.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private bsModal: BsModalService) {
  }

  ngOnInit(): void {
  }

  openSignUp() {
    this.bsModal.show(SignUpComponent, {
      class: 'modal-dialog-centered modal-lg'
    })
  }

  openLogin() {
    this.bsModal.show(LoginComponent, {
      class: 'modal-dialog-centered'
    })
  }

}
