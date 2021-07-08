import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';
import { ViewMoreVehicleComponent } from './view-more-vehicle/view-more-vehicle.component';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {

  List : any;

  constructor(private bsModal: BsModalService,private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }


  getAllVehicles(){
    this.adminService.viewAllVehicles().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }
  openUpdate() {
    this.bsModal.show(UpdateComponent, {
      class: 'modal-dialog-centered modal-lg'
    })
  }

  openDelete() {
    this.bsModal.show(DeleteComponent, {
      class: 'modal-dialog-centered'
    })
  }

  viewMoreVehicle(){
    this.bsModal.show(ViewMoreVehicleComponent, {
      class: 'modal-dialog-centered modal-lg'
    })
  }

}
