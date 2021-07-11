import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-verify-view-more',
  templateUrl: './verify-view-more.component.html',
  styleUrls: ['./verify-view-more.component.css']
})
export class VerifyViewMoreComponent implements OnInit {

  constructor(private modalRef: BsModalRef,private bsModal: BsModalService, private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
    this.getUserById();
  }

  userEmail:any;
  selectedUser:any;

  getUserById(){
    this.adminService.getUserByID(this.userEmail).subscribe((data)=>{
      console.log(data);
      this.selectedUser=data;
    });
  }

  hideForm() {
    this.modalRef.hide();
  }
}
