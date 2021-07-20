import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AddToBlacklistComponent } from './add-to-blacklist/add-to-blacklist.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { VmvUsersComponent } from './vmv-users/vmv-users.component';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  List : any;

  constructor(private bsModal: BsModalService,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  addToBlackList() {
    this.bsModal.show(AddToBlacklistComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered'
    })
  }

  viewMore(){
    this.bsModal.show(VmvUsersComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg'
    })
  }

  removeUser(){
    this.bsModal.show(RemoveUserComponent,{
      ignoreBackdropClick:true,
      class:'modal-dialog-centered'
    })
  }

  getAllUsers(){
    this.adminService.viewAllUsers().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

}
