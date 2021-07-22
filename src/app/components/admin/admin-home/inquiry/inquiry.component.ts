import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { RemoveInqComponent } from './view-more/remove-inq/remove-inq.component';
import { ViewMoreComponent } from './view-more/view-more.component';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  List : any;
  Inquiry:any;
  bsModalRef:BsModalRef


  constructor(private adminService:AdminServiceService,private bsModal: BsModalService) { }

  ngOnInit(): void {
    this.getAllInquiries();

  }

  getAllInquiries(){
    this.adminService.viewAllInquiries().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }


  openViewMore(inquiryId: number) {
    this.bsModalRef = this.bsModal.show(ViewMoreComponent, {
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-lg',
      initialState: {
        inqId:inquiryId
      },
    });

  }

  removeInquiy(inquiryId:number){
    this.bsModalRef=this.bsModal.show(RemoveInqComponent,{
      ignoreBackdropClick:true,
      class:'modal-dialog-centered',
      initialState:{
        inqId:inquiryId
      },
    });
  }

}
