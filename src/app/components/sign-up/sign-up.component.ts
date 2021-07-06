import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form : FormGroup;
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
    this.form= new FormGroup({
      'fName':new  FormControl(null),
      'lName':new  FormControl(null),
      'emailAddress':new  FormControl(null),
      'password':new  FormControl(null),
      'contactNumber':new  FormControl(null),
      // 'dob':new  FormControl(null),
      'nicNumber':new  FormControl(null)
    })
  }


  hideForm() {
    this.modalRef.hide();
  }

  onSignUP(){
    const fName:string=this.form.get('fName').value;
    const lName : string=this.form.get('lName').value;
    const email:string=this.form.get('emailAddress').value;
    const contactNumber : string=this.form.get('contactNumber').value;
    const nicNumber:string=this.form.get('nicNumber').value;
    // const dob : string=this.form.get('dob').value;
    const password : string=this.form.get('password').value;


    this.userService.userRegistration(fName,lName,email,contactNumber,nicNumber,password).subscribe(
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
