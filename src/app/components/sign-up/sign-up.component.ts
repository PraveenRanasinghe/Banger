import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm : FormGroup;
  constructor(
    private modalRef: BsModalRef,
    private httpClient: HttpClient,
    private userService:UserServiceService) {}

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  ngOnInit(): void {
    this.signupInfo();
  }

  signupInfo(){
    this.signupForm= new FormGroup({
      'fName':new  FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+$')]),
      'lName':new  FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+$')]),
      'emailAddress':new  FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'passwordValidator': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'contactNumber':new FormControl(null, [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')],),
      'dob':new  FormControl('',Validators.required),
      'nicNumber':new  FormControl('',Validators.required)
    })
  }

  hideForm() {
    this.modalRef.hide();
  }

  onSignUP(){
    const fName:string=this.signupForm.get('fName').value;
    const lName : string=this.signupForm.get('lName').value;
    const email:string=this.signupForm.get('emailAddress').value;
    const contactNumber : string=this.signupForm.get('contactNumber').value;
    const nicNumber:string=this.signupForm.get('nicNumber').value;
    const dob : string=this.signupForm.get('dob').value;
    const password : string=this.signupForm.get('password').value;


    this.userService.userRegistration(fName,lName,email,contactNumber,nicNumber,dob,password).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem('token',data.token);
      },
      (error)=>{
        console.log("Cannot Login",error);
      }
    );
  }


  public onFileChanged(event) {

    this.selectedFile = event.target.files[0];
  }


  // onUpload() {
  //   console.log(this.selectedFile);

  //   //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //   const uploadImageData = new FormData();
  //   uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //   this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.message = 'Image uploaded successfully';
  //       } else {
  //         this.message = 'Image not uploaded successfully';
  //       }
  //     }
  //     );
  // }


}
