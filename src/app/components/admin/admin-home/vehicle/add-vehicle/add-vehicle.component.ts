import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  form : FormGroup;

  constructor(private bsModal: BsModalService,
              private modalRef: BsModalRef,
              private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  onSubmit(){

  }

  addVehicleImg() {

  }
}
