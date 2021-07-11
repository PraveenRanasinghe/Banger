import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private bsModal: BsModalService,
              private modalRef: BsModalRef,
              private adminService:AdminServiceService) {
  }

  vId:any;
  selectedVehicle:any;

  ngOnInit(): void {
    this.getSelectedVehicle();
  }

  hideForm() {
    this.modalRef.hide();
  }

  getSelectedVehicle(){
    this.adminService.getVehicleById(this.vId).subscribe((data)=>{
      this.selectedVehicle=data;
    })
  }

}
