import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-remove-inq',
  templateUrl: './remove-inq.component.html',
  styleUrls: ['./remove-inq.component.css']
})
export class RemoveInqComponent implements OnInit {

  constructor(private modalRef: BsModalRef) {
  }
  selectedInquiry:any

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }


}
