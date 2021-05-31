import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private bsModal: BsModalService,
              private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  addVehicleImg() {

  }

}
