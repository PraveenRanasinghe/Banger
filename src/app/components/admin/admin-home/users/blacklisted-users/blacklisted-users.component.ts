import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { RemoveUserComponent } from '../view-users/remove-user/remove-user.component';
import { VmvUsersComponent } from '../view-users/vmv-users/vmv-users.component';

@Component({
  selector: 'app-blacklisted-users',
  templateUrl: './blacklisted-users.component.html',
  styleUrls: ['./blacklisted-users.component.css']
})
export class BlacklistedUsersComponent implements OnInit {

  List : any;

  constructor(private bsModal: BsModalService,private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  

  viewMore(email:string){
    this.bsModal.show(VmvUsersComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg',
      initialState: {
        userEmail:email
      },
    })
  }

  removeUser(email:string){
    this.bsModal.show(RemoveUserComponent,{
      ignoreBackdropClick:true,
      class:'modal-dialog-centered',
      initialState: {
        userEmail:email
      },
    })
  }

  getAllUsers(){
    this.adminService.viewBlackListedUsers().subscribe((data)=>{
      console.log(data);
      this.List=data;
    })
  }

}
