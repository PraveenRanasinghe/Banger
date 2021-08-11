import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css']
})
export class RemoveUserComponent implements OnInit {

  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) {
  }

  userEmail:string;

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  removeUser(){
    this.adminService.removeUser(this.userEmail).subscribe((data)=>{
      console.log(data);
    })
    this.hideForm();
  }

  reloadPage(){
    window.location.reload();
  }

}
