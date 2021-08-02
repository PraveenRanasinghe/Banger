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
  licenceImg:File;
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
        utilityBill:data.utilityBill,
        licenceImg:data.licenceImg
      })
    })
  }

  onUpdateProfileDetails(){

      this.message=undefined;
      if(this.updateProfileForm.valid){
        const fName:string=this. updateProfileForm.get('fName').value;
        const lName : string=this. updateProfileForm.get('lName').value;
        const contactNum : string=this. updateProfileForm.get('contactNum').value;
        const utilityBill:File= this. updateProfileForm.get('utilityBill').value;
        const licenceImg:File= this.updateProfileForm.get('licenceImg').value;

        this.userService.updateUserProfile(JSON.parse(sessionStorage.getItem("data")).email,fName,lName,contactNum,this.utilityBill, this.licenceImg).subscribe((data:any)=>{
          console.log(data);
          this.message='Your Account has been Updated Successfully!';

        })
      }
  }

  getMessage(){
    if (this.message === "Your Account has been Updated Successfully!") {
      return "success";
    }
    else {
      return "danger";
    }
  }

  public onFileChangedToUtility(event){
    this.utilityBill=event.target.files[0];
  }

  public onFileChangedToLiscence(event) {
    this.licenceImg = event.target.files[0];
  }

  updateInfo(){
    this.updateProfileForm= new FormGroup({
      fName:new FormControl(null, Validators.required),
      lName:new FormControl(null, Validators.required),
      contactNum: new  FormControl(null, Validators.required),
      utilityBill : new FormControl(null),
      licenceImg: new FormControl(null)
    });
  }

}
