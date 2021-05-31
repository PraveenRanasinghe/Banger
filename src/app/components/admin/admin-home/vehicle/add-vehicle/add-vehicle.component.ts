import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

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
