import { getLocaleDayNames } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  utilityBill:File;
  updateProfileForm:FormGroup;
  message :any;

  ngOnInit(): void {
    this.updateInfo();
    this.getLoggedInUser();
  }

  getLoggedInUser(){
    this.userService.getLoggedInUser(JSON.parse(sessionStorage.getItem("data")).email).subscribe((data)=>{
      console.log(data);
      data.profileImage=`data:image/jpeg;base64,${data.profileImage}`;
      data.licenceImg=`data:image/jpeg;base64,${data.licenceImg}`;
      data.utilityBill=`data:image/jpeg;base64,${data.utilityBill}`;
      this.userInfo=data;
      this.updateProfileForm.patchValue({
        fName:data.fName,
        lName:data.lName,
        contactNum:data.contactNum,
        utilityBill:data.utilityBill
      })
    })
  }

  onUpdateProfileDetails(){
    try{
      this.message=undefined;
      if(this.updateProfileForm.valid){
        const fName:string=this. updateProfileForm.get('fName').value;
        const lName : string=this. updateProfileForm.get('lName').value;
        const contactNum : string=this. updateProfileForm.get('contactNum').value;
        const utilityBill:File= this. updateProfileForm.get('utilityBill').value;

        this.userService.updateUserProfile(fName,lName,contactNum,this.utilityBill).subscribe((data:any)=>{
          this.message='You have been registered in our organization successfully! Now You can make Bookings in Our Organization!';

        })
      }

    }
    catch(error){

    }
  }

  public onFileChangedToUtility(event){
    this.utilityBill=event.target.files[0];
  }


  updateInfo(){
    this.updateProfileForm= new FormGroup({
      fName:new FormControl(null, Validators.required),
      lName:new FormControl(null, Validators.required),
      contactNum: new  FormControl(null, Validators.required),
      utilityBill: new FormControl(null, Validators.required)
    });
  }

}
