import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update-equip',
  templateUrl: './update-equip.component.html',
  styleUrls: ['./update-equip.component.css']
})
export class UpdateEquipComponent implements OnInit {

  constructor(private modalRef: BsModalRef,private adminService:AdminServiceService) {
  }

  equipId:any;
  selectedEquipment:any;
  updateEquipmentForm:FormGroup;


  ngOnInit(): void {
    this.updateInfo();
    this.getSelectedEquipment();
  }


  getSelectedEquipment(){
    this.adminService.getEquipmentById(this.equipId).subscribe((data)=>{
      this.selectedEquipment=data;
      this.updateEquipmentForm.patchValue({
        'pricePerDayEQ':data.pricePerDayEQ,
        'itemDescription':data.itemDescription
      })
    });
  }


  onUpdateEquipment(){
    const pricePerDayEQ : string=this.updateEquipmentForm.get('pricePerDayEQ').value;
    const description:string=this.updateEquipmentForm.get('description').value;

    this.adminService.updateEquipmentDetails(this.equipId,pricePerDayEQ,description).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
      },
      (error) => {
        console.log('Error Occured!', error);
      }
    )
  }

  updateInfo(){
    this.updateEquipmentForm= new FormGroup({
        'pricePerDayEQ' :new FormControl(null,Validators.required),
        'itemDescription':new FormControl(null,Validators.required)
    })
  }


  hideForm() {
    this.modalRef.hide();
  }

}
