import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-remove-inq',
  templateUrl: './remove-inq.component.html',
  styleUrls: ['./remove-inq.component.css']
})
export class RemoveInqComponent implements OnInit {

  constructor(private modalRef: BsModalRef,private adminService:AdminServiceService) {
  }
  selectedInquiry:any
  inqId:any;

  ngOnInit(): void {
    console.log(this.inqId);
  }

  hideForm() {
    this.modalRef.hide();
  }

  removeSelectedInquiry(){
    this.adminService.removeInquiry(this.inqId).subscribe((data)=>{
      console.log(data);
    })
  }

}
