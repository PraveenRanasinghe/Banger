import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { VerifyViewMoreComponent } from './verify-view-more/verify-view-more.component';

@Component({
  selector: 'app-verify-users',
  templateUrl: './verify-users.component.html',
  styleUrls: ['./verify-users.component.css']
})
export class VerifyUsersComponent implements OnInit {

  List:any;
  bsModalRef:BsModalRef
  User:any;

  constructor(private bsModal: BsModalService,private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
    this.getAllPendingUsers();
  }

  getAllPendingUsers(){
    this.adminService.viewAllPendingUsers().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

  // openViewMore(userEmail:string) {
  //   this.bsModal.show(VerifyViewMoreComponent, {
  //     ignoreBackdropClick:true,
  //     class: 'modal-dialog-centered modal-lg',
  //     email:userEmail
  //   })
  // }


  openViewMore(email:string) {
    this.bsModalRef = this.bsModal.show(VerifyViewMoreComponent, {
      ignoreBackdropClick: false,
      class: 'modal-dialog-centered modal-lg',
      initialState: {
        userEmail:email
      },
    });
  }

}
