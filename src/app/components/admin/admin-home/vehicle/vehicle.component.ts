import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor(private bsModal: BsModalService) {
  }

  ngOnInit(): void {
  }

  openAddVehicle() {
    this.bsModal.show(AddVehicleComponent, {
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-lg'
    })
  }
}
