import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) {
  }

  vId:number;

  ngOnInit(): void {
  }

  removeVehicle(){
    this.adminService.removeVehicle(this.vId).subscribe((data)=>{
      console.log(data);
    })
    this.hideForm();
  }

  hideForm() {
    this.modalRef.hide();
  }

  reloadPage(){
    window.location.reload();
  }

}
