import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private userService:UserServiceService) {
  }

  userInfo:any;
  email:string;
  liscenceImg: File;
  profileImage:File;
  utilityBill:File;
  updateProfileForm:FormGroup

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  onUpdateProfileDetails(){

  }

  getLoggedInUser(){
    this.userService.getLoggedInUser(JSON.parse(sessionStorage.getItem("data")).email).subscribe((data)=>{
      console.log(data);
      data.profileImage=`data:image/jpeg;base64,${data.profileImage}`;
      data.licenceImg=`data:image/jpeg;base64,${data.licenceImg}`;
      data.utilityBill=`data:image/jpeg;base64,${data.utilityBill}`;
      this.userInfo=data;
    })
  }

  public onFileChangedToLiscence(event) {
    this.liscenceImg = event.target.files[0];
  }


  public onFileChangedToUtility(event){
    this.utilityBill=event.target.files[0];
  }


}
