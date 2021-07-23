import {Component, OnInit} from '@angular/core';
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

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser(){
    this.userService.getLoggedInUser(this.email).subscribe((data)=>{
      console.log(data);
      this.userInfo=data;
    })
  }

}
