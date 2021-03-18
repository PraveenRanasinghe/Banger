import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  imgUrl="";
  liscenceImg:FormGroup

  constructor(private modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  showLiscenceImg(eventInfo){
    this.imgUrl="";
    const selectedImg=eventInfo.target.files[0];
    this.liscenceImg.patchValue({
      'liscenceImg':selectedImg
    })
    this.liscenceImg.get('liscenceImg').updateValueAndValidity();

    const fileReader :FileReader= new FileReader();
    fileReader.readAsDataURL(selectedImg);
    fileReader.onload = (eventData) => {
      this.imgUrl = eventData.target.result as string;
    }
  }
  hideForm() {
    this.modalRef.hide();
  }
}
