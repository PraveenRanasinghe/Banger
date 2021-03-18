import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {

  constructor(private bsModal : BsModalService) { }

  ngOnInit(): void {
  }

  openAddVehicle(){
    this.bsModal.show(AddVehicleComponent,{
      class:'modal-dialog-centered modal-lg'
    })
  }

}
