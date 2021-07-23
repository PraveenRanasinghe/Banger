import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-delete-equip',
  templateUrl: './delete-equip.component.html',
  styleUrls: ['./delete-equip.component.css']
})
export class DeleteEquipComponent implements OnInit {

  equipId:number;

  constructor(private bsModal: BsModalRef,
    private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.bsModal.hide();
  }

  removeSelectedEquipment(){
    this.adminService.removeEquipment(this.equipId).subscribe((data)=>{
      console.log(data);
    })
    this.hideForm();
  }
}
