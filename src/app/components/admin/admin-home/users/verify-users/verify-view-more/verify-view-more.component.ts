import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-verify-view-more',
  templateUrl: './verify-view-more.component.html',
  styleUrls: ['./verify-view-more.component.css']
})
export class VerifyViewMoreComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private bsModal: BsModalService,
    private adminService:AdminServiceService,
    private spinner :NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getUserById();
    this.updateStatus();
  }

  userEmail:any;
  selectedUser:any;
  acceptUserForm:any;
  message:string;



  getUserById(){
    this.adminService.getUserByID(this.userEmail).subscribe((data)=>{
      console.log(data);
      this.selectedUser=data;
      this.acceptUserForm.patchValue({
        'status':data.status
      })
    });
  }

  OnAcccpetUser(email:string){
    try{
      this.message=undefined;
      this.spinner.show();

      if(this.acceptUserForm.valid){
        console.log(email);
        this.adminService.acceptUserAccount(email, 'Accepted').subscribe(
          (data:any)=>{
            console.log(data);
            this.message='User Account has been Accepted!'
            this.spinner.hide();
          });
      }
    }
    catch(error){
      this.message = 'An Unexpected Error Occurred. Please Try Again !';
    }

  }

  getMessage(){
    if (this.message === "User Account has been Accepted!") {
      return "success";
    }
    else {
      return "danger";
    }
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
