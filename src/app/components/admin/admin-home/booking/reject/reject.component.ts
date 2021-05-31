import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {

  constructor(private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }
}
