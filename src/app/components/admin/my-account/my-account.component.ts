import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) { }

  userInfo:any;
  ngOnInit(): void {
    this.getLoggedInUser();
  }


  hideForm() {
    this.modalRef.hide();
  }

  getLoggedInUser(){
    this.adminService.getLoggedInUser(JSON.parse(sessionStorage.getItem("data")).email).subscribe((data)=>{
      console.log(data);
      data.profileImage=`data:image/jpeg;base64,${data.profileImage}`;
      this.userInfo=data;
    })
  }

}
