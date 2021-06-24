import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AddToBlacklistComponent } from './add-to-blacklist/add-to-blacklist.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private bsModal: BsModalService,private adminService:AdminServiceService) { }

  ngOnInit(): void {
  }
  addToBlackList() {
    this.bsModal.show(AddToBlacklistComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered'
    })
  }

  removeUser(){
    this.bsModal.show(RemoveUserComponent,{
      ignoreBackdropClick:true,
      class:'modal-dialog-centered'
    })
  }

  getAllUsers(){
    this.adminService.ViewAllUsers().subscribe((data)=>{
      console.log(data);
    })
  }

}
