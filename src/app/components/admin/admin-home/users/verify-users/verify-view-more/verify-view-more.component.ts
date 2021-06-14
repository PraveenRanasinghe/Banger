import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-verify-view-more',
  templateUrl: './verify-view-more.component.html',
  styleUrls: ['./verify-view-more.component.css']
})
export class VerifyViewMoreComponent implements OnInit {

  constructor(private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }
}
