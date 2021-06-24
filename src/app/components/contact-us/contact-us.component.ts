import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private inqService:GuestService

  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'fullName':new FormControl(null),
      'email':new  FormControl(null),
      'contactNum':new  FormControl(null),
      'message':new  FormControl(null)
    })
  }

  onSubmit(){

  }

  onSubmitInq(){
    const fullName:string=this.form.get('fullName').value;
    const email:string=this.form.get('email').value;
    const contactNum:string=this.form.get('contactNum').value;
    const message:string=this.form.get('message').value;

    this.inqService.addInquiry(fullName,email,contactNum,message).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem('token',data.token);
      },
      (error)=>{
        console.log("Cannot send the Inquiry!",error);
      }
    )
  }
}
