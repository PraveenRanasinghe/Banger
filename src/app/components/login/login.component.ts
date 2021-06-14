import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { LoginService } from 'src/app/services/login.service';
import {SignUpComponent} from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private bsModal: BsModalService,
              private modalRef: BsModalRef,
              private http: HttpClient,
              private service:LoginService) {
  }

  ngOnInit(): void {
    this.onLogin();
  }

  hideForm() {
    this.modalRef.hide();
  }
  userName: "praveenranasinghe43@gmail.com"
  password:"123123123"
  onLogin() {

    // userName: "praveenranasinghe43@gmail.com"
    // password:"123123123"

    this.service.UserAuthentication(this.userName, this.password).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem("token", data.token)
    })
    this.http.post("http://localhost:8080/authenticate", {
      username: "praveenranasinghe43@gmail.com",
      password: "123123123"
    }).subscribe(((data) => {
      console.log(data);
    }))
  }

  openSignUp() {
    this.bsModal.show(SignUpComponent, {
      ignoreBackdropClick:true,
      class: 'modal-dialog-centered modal-lg'
    })
  }


}
