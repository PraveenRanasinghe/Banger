import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
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
  bsModalRef:BsModalRef

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

  openUpdate(vehicleId:number) {
   this.bsModalRef= this.bsModal.show(UpdateComponent, {
      class: 'modal-dialog-centered modal-lg',
      ignoreBackdropClick:true,
      initialState: {
        vId:vehicleId
      }
    })
  }

  openDelete(vehicleId:number){
    this.bsModal.show(DeleteComponent, {
      class: 'modal-dialog-centered',
      ignoreBackdropClick:true,
      initialState: {
        vId:vehicleId
      }
    })
  }

  // viewMoreVehicle(){
  //   this.bsModal.show(ViewMoreVehicleComponent, {
  //     class: 'modal-dialog-centered modal-lg'
  //   })
  // }

}
