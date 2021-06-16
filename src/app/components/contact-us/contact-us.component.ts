import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private bsModal: BsModalService,
    private modalRef: BsModalRef,

  ) {}

  ngOnInit(): void {
  }

  onSubmit(){

  }

  onSubmitInq(){

  }
}
