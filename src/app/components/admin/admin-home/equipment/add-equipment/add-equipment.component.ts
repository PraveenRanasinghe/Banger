import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  addEqform : FormGroup;
  message:string;

  constructor
  ( private modalRef: BsModalRef,
    private adminService:AdminServiceService,
    private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
    this.addEqform = new FormGroup({
      'itemName':new  FormControl(null, Validators.required),
      'pricePerDayEQ':new  FormControl(null,Validators.required),
      'description':new  FormControl(null,Validators.required),
      'quantity':new FormControl(null, Validators.required)
    })
  }

  hideForm() {
    this.modalRef.hide();
  }

  onAddEquipment(){

    try{
      this.message=undefined;
      this.spinner.show();

      if(this.addEqform.valid){
        const itemName:string=this.addEqform.get('itemName').value;
        const pricePerDayEQ : string=this.addEqform.get('pricePerDayEQ').value;
        const description:string=this.addEqform.get('description').value;
        const quantity:number=this.addEqform.get('quantity').value;

        this.adminService.AddEquipment(itemName,pricePerDayEQ,description,quantity).subscribe(
          (data: any) => {
            console.log(data);
            this.message='New Equipment has been added to the system successfully!'
            this.spinner.hide();
            this.addEqform.reset();
            localStorage.setItem('token', data.token);
          },
          (error) => {
            console.log('Process Cannot do this moment. Please Try Again!', error);
          }
        );
      }
    }
    catch(error){
      this.message = 'An Unexpected Error Occurred. Please Try Again !';
    }
  }

  getMessage(){
    if (this.message === "New Equipment has been added to the system successfully!") {
      return "success";
    }
    else {
      return "danger";
    }
  }


}
