import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {DeleteEquipComponent} from './delete-equip/delete-equip.component';
import {UpdateEquipComponent} from './update-equip/update-equip.component';

@Component({
  selector: 'app-update-delete-equip',
  templateUrl: './update-delete-equip.component.html',
  styleUrls: ['./update-delete-equip.component.css']
})
export class UpdateDeleteEquipComponent implements OnInit {

  List : any;
  constructor(private bsModal: BsModalService,private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
    this.getAllEquipments();
  }


  getAllEquipments(){
    this.adminService.viewAllEquipments().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  openUpdateEquip() {
    this.bsModal.show(UpdateEquipComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg'
    })
  }

  openDeleteEquip() {
    this.bsModal.show(DeleteEquipComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered'
    })
  }
}
