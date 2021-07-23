import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-vmv-users',
  templateUrl: './vmv-users.component.html',
  styleUrls: ['./vmv-users.component.css']
})
export class VmvUsersComponent implements OnInit {
  constructor(private modalRef: BsModalRef,
    private bsModal: BsModalService,
    private adminService:AdminServiceService,
    private spinner :NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getUserById();
  }

  userEmail:any;
  selectedUser:any;
  acceptUserForm:any;

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
