import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  constructor(private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }


  hideForm() {
    this.modalRef.hide();
  }
}
