import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private bsModal: BsModalService,
              private modalRef: BsModalRef,
              private spinner: NgxSpinnerService,
              private adminService:AdminServiceService,
              ) {
  }

  vId:any;
  selectedVehicle:any;
  updateVehicleForm:FormGroup;
  message:any;

  ngOnInit(): void {
    this.updateInfo();
    this.getSelectedVehicle();
  }

  hideForm() {
    this.modalRef.hide();
  }

  getSelectedVehicle(){
    this.adminService.getVehicleById(this.vId).subscribe((data)=>{
      this.selectedVehicle=data;
      this.updateVehicleForm.patchValue({
        'fuelType': data.fuelType,
        'pricePerDay': data.pricePerDay,
        'transmission': data.transmissionType,
        'airbags': data.airBag,
        'ac': data.ac
      })
    })
  }

  onUpdateVehicle(){
    try{
      this.message = undefined;
      this.spinner.show();

      if(this.updateVehicleForm.valid){
        const fuelType : string=this.updateVehicleForm.get('fuelType').value;
        const pricePerDay:string=this.updateVehicleForm.get('pricePerDay').value;
        const transmission : string=this.updateVehicleForm.get('transmission').value;
        const airbags:string=this.updateVehicleForm.get('airbags').value;
        const ac : string=this.updateVehicleForm.get('ac').value;

        this.adminService.updateVehicleDetails(this.vId,ac,airbags,transmission,pricePerDay,fuelType).subscribe(
          (data: any) => {
            console.log(data);
            this.message='Vehicle details has been Updated successfully!';
            this.spinner.hide();
            this.updateVehicleForm.reset();
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
    if (this.message === "Vehicle details has been Updated successfully!") {
      return "success";
    }
    else {
      return "danger";
    }
  }

  reloadPage(){
    window.location.reload();
  }

  updateInfo(){
    this.updateVehicleForm= new FormGroup({
      'fuelType':new  FormControl(null, Validators.required),
      'pricePerDay':new  FormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
      'transmission':new  FormControl(null, Validators.required),
      'airbags':new  FormControl(null, Validators.required),
      'ac':new  FormControl(null, Validators.required),
    })
  }

}
