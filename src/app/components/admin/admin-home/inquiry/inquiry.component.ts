import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ViewMoreComponent } from './view-more/view-more.component';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  constructor(private adminService:AdminServiceService,private bsModal: BsModalService) { }

  ngOnInit(): void {
    this.getAllInquiries();
  }

  getAllInquiries(){
    this.adminService.ViewAllInquiries().subscribe((data)=>{
      console.log(data);

    })
  }

  openViewMore() {
    this.bsModal.show(ViewMoreComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg'
    })
  }

}
