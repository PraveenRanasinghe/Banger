import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-scrapped-details',
  templateUrl: './scrapped-details.component.html',
  styleUrls: ['./scrapped-details.component.css']
})
export class ScrappedDetailsComponent implements OnInit {

  List:any

  constructor(private adminService:AdminServiceService,
    private bsModal: BsModalService) { }

  ngOnInit(): void {
    this.getScrappedResults();
  }

  getScrappedResults(){
    this.adminService.getScrappedDetails().subscribe((data)=>{
      this.List=data;
    });
  }

  openAddVehicle() {
    this.bsModal.show(AddVehicleComponent, {
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-lg'
    })
  }

}
