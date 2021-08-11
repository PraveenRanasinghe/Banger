import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MyAccountComponent } from '../my-account/my-account.component';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private router :  Router,private bsModal: BsModalService) {
  }

  ngOnInit(): void {
  }

  signout(){
    sessionStorage.removeItem('jwttoken');
    this.router.navigate(['/home']);

  }

  openMyAccount(){
    this.bsModal.show(MyAccountComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg'
    })
  }

}
