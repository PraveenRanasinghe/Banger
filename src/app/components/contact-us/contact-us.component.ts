import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private inqService:GuestService

  ) {}

  ngOnInit(): void {
   this.contactFormInfo();
  }

  contactFormInfo(){
    this.contactForm = new FormGroup({
      'fullName':new  FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+$')]),
      'contactNum':new  FormControl(null, [Validators.required,Validators.email]),
      'email':new  FormControl(null, [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')],),
      'message':new  FormControl(null,Validators.required)
    })
  }

  onSubmitInq(){
    const fullName:string=this.contactForm.get('fullName').value;
    const email:string=this.contactForm.get('email').value;
    const contactNum:string=this.contactForm.get('contactNum').value;
    const message:string=this.contactForm.get('message').value;


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
