import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/services/login.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form:FormGroup;


  constructor(
    private bsModal: BsModalService,
    private modalRef: BsModalRef,
    private service: LoginService,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'emailAddress':new  FormControl('',Validators.required),
      'password':new  FormControl('',Validators.required)
    })
  }

  hideForm() {
    this.modalRef.hide();
  }


  onLogin() {
    const email:string=this.form.get('emailAddress').value;
    const password : string=this.form.get('password').value;

    this.service.UserAuthentication(email, password).subscribe(
      (data: any) => {
        sessionStorage.setItem("jwttoken",data.token);
        console.log(data.token);
        sessionStorage.setItem("data",JSON.stringify(data.token));

        console.log(data.userRole);

        if(data.userRole=="Admin"){
          this.route.navigate(['/admin']);
        }
        else if(data.userRole=="Customer"){
          this.route.navigate(['/customer']);
        }

      },
      (error) => {
        console.log('Authentication Failed! Please Try Again!', error);
      }
    );

  }

  onSubmit(){

  }

  openSignUp() {
    this.bsModal.show(SignUpComponent, {
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-lg',
    });
  }
}
