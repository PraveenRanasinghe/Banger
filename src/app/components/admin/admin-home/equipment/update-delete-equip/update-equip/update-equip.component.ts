import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update-equip',
  templateUrl: './update-equip.component.html',
  styleUrls: ['./update-equip.component.css']
})
export class UpdateEquipComponent implements OnInit {

  constructor(private modalRef: BsModalRef,private adminService:AdminServiceService) {
  }

  equipId:any;
  selectedEquipment:any;

  ngOnInit(): void {
    this.getSelectedEquipment();
  }

  getSelectedEquipment(){
    this.adminService.getEquipmentById(this.equipId).subscribe((data)=>{
      this.selectedEquipment=data;
    });
  }


  hideForm() {
    this.modalRef.hide();
  }

}
