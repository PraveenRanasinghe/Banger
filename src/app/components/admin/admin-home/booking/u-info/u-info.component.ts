import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-u-info',
  templateUrl: './u-info.component.html',
  styleUrls: ['./u-info.component.css']
})
export class UInfoComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) { }
  acceptUserForm:any;
  selectedUser:any;
  message:string;
  userInfo:any;

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(){
    this.adminService.getUserByID(this.userInfo).subscribe((data)=>{
      console.log(data);
      this.selectedUser=data;
    });
  }
  hideForm() {
    this.modalRef.hide();
  }
}
