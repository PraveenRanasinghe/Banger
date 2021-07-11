import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { RemoveInqComponent } from './remove-inq/remove-inq.component';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  constructor(private modalRef: BsModalRef,private bsModal: BsModalService, private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
    this.getInqById();
    console.log(this.inqId);
  }

  hideForm() {
    this.modalRef.hide();
  }

  inqId:any;
  selectedInquiry:any

  getInqById(){
    this.adminService.getInquiryById(this.inqId).subscribe((data)=>{
      console.log(data);
      this.selectedInquiry=data;
    })
  }

  removeInquiry(){
    this.modalRef=this.bsModal.show(RemoveInqComponent,{
      ignoreBackdropClick:true,
      class:'modal-dialog-centered'
    });
  }

}
