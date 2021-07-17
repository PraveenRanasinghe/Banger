import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
    this.updateStatus();
  }

  userEmail:any;
  selectedUser:any;
  acceptUserForm:any;



  getUserById(){
    this.adminService.getUserByID(this.userEmail).subscribe((data)=>{
      console.log(data);
      this.selectedUser=data;
      this.acceptUserForm.patchValue({
        'status':data.status
      })
    });
  }

  OnAcccpetUser(){
    const status:string=this.acceptUserForm.get('status').value;

    this.adminService.acceptUserAccount(this.userEmail,status).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem('token', data.token);
      },
      (error) => {
        console.log('Error Occured!', error);
      }
    );
  }

  updateStatus(){
    this.acceptUserForm= new FormControl({
      'status':new FormControl('',Validators.required)
    })
  }
  hideForm() {
    this.modalRef.hide();
  }
}
