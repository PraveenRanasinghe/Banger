import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update-equip',
  templateUrl: './update-equip.component.html',
  styleUrls: ['./update-equip.component.css'],
})
export class UpdateEquipComponent implements OnInit {
  constructor(
    private modalRef: BsModalRef,
    private adminService: AdminServiceService,
    private spinner: NgxSpinnerService
  ) {}

  equipId: any;
  selectedEquipment: any;
  updateEquipmentForm: FormGroup;
  message:string;

  ngOnInit(): void {
    this.updateInfo();
    this.getSelectedEquipment();
  }

  reloadPage(){
    window.location.reload();
  }

  getSelectedEquipment() {
    this.adminService.getEquipmentById(this.equipId).subscribe((data) => {
      this.selectedEquipment = data;
      this.updateEquipmentForm.patchValue({
        pricePerDayEQ: data.pricePerDayEQ,
        itemDescription: data.itemDescription,
        quantity:data.quantity,
      });
    });
  }

  onUpdateEquipment() {
    try{
      this.message = undefined;
      this.spinner.show();

      if(this.updateEquipmentForm.valid){
        const pricePerDayEQ: string =
        this.updateEquipmentForm.get('pricePerDayEQ').value;
      const description: string =
        this.updateEquipmentForm.get('itemDescription').value;
      const quantity :number=
        this.updateEquipmentForm.get('quantity').value;
      console.log(pricePerDayEQ, description);
      this.adminService
        .updateEquipmentDetails(this.equipId, pricePerDayEQ, description,quantity)
        .subscribe((data) => {
          console.log(data);
          this.message='Equipment Details has been updated Successfully!'
          this.spinner.hide();
          this.updateEquipmentForm.reset();
        });
      }
    }
    catch(error){
      this.message = 'An Unexpected Error Occurred. Please Try Again !';
    }

  }

  getMessage(){
    if (this.message === "Equipment Details has been updated Successfully!") {
      return "success";
    }
    else {
      return "danger";
    }
  }

  updateInfo() {
    this.updateEquipmentForm = new FormGroup({
      pricePerDayEQ: new FormControl(null, Validators.required),
      itemDescription: new FormControl(null, Validators.required),
      quantity:new FormControl(null,Validators.required)
    });
  }

  hideForm() {
    this.modalRef.hide();
  }
}
