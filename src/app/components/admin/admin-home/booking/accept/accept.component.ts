import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(private modalRef:BsModalRef) { }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

}
