import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  imgUrl="";
  vehicleImg:FormGroup
  constructor(private bsModal : BsModalService,
    private modalRef:BsModalRef) { }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

  openSignUp(){
    this.bsModal.show(AddVehicleComponent,{
      class:'modal-dialog-centered modal-lg'
    })
  }

  addVehicleImg(eventInfo){
    this.imgUrl="";
    const selectedImg=eventInfo.target.files[0];
    this.vehicleImg.patchValue({
      'vehicleImg':selectedImg
    })
    this.vehicleImg.get('vehicleImg').updateValueAndValidity();

    const fileReader :FileReader= new FileReader();
    fileReader.readAsDataURL(selectedImg);
    fileReader.onload = (eventData) => {
      this.imgUrl = eventData.target.result as string;
    }
  }

}
