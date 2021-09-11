import { HttpClient } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addVehicleform : FormGroup;
  message:string;


  constructor(private modalRef: BsModalRef,
              private adminService:AdminServiceService,
              private spinner: NgxSpinnerService) {}

            selectedFile :File;
            retrievedImage: any;
            base64Data: any;
            retrieveResonse: any;
            imageName: any;

  ngOnInit(): void {
    this.addVehicleform = new FormGroup({
      'vehicleType':new  FormControl(null, Validators.required),
      'vehicleModel':new  FormControl(null, Validators.required),
      'seat':new  FormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
      'fuelType':new  FormControl(null, Validators.required),
      'pricePerDay':new  FormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
      'transmission':new  FormControl(null, Validators.required),
      'airbags':new  FormControl(null, Validators.required),
      'ac':new  FormControl(null, Validators.required),
      'vehicleImage': new FormControl(null, Validators.required)
    })
    this.spinner.show();
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
  }





  hideForm() {
    this.modalRef.hide();
  }

  addVehicle(){
    try{
      this.message = undefined;
      this.spinner.show();

      if(this.addVehicleform.valid){
        const vehicleType:string=this.addVehicleform.get('vehicleType').value;
        const vehicleModel : string=this.addVehicleform.get('vehicleModel').value;
        const seat:string=this.addVehicleform.get('seat').value;
        const fuelType : string=this.addVehicleform.get('fuelType').value;
        const pricePerDay:string=this.addVehicleform.get('pricePerDay').value;
        const transmission : string=this.addVehicleform.get('transmission').value;
        const airbags:string=this.addVehicleform.get('airbags').value;
        const ac : string=this.addVehicleform.get('ac').value;
        const vehicleImage :File= this.addVehicleform.get('vehicleImage').value;



        this.adminService.AddVehicle(vehicleModel,vehicleType,seat,fuelType,pricePerDay,transmission,airbags,ac,this.selectedFile).subscribe(
          (data: any) => {
            console.log(data);
            this.message='New Vehicle has been added to the system successfully!';
            this.spinner.hide();
            this.addVehicleform.reset();
            localStorage.setItem('token', data.token);
          },
          (error) => {
            console.log('Error Occured!', error);
          }
        );
      }
    }
    catch(error){
      this.message = 'An Unexpected Error Occurred. Please Try Again !';
    }

  }

  getMessage(){
    if (this.message === "New Vehicle has been added to the system successfully!") {
      return "success";
    }
    else {
      return "danger";
    }
  }

}
