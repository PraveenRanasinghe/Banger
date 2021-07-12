import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  addEqform : FormGroup;
  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
    this.addEqform = new FormGroup({
      'itemName':new  FormControl(null, Validators.required),
      'pricePerDayEQ':new  FormControl(null,Validators.required),
      'description':new  FormControl(null,Validators.required)
    })
  }

  hideForm() {
    this.modalRef.hide();
  }

  onAddEquipment(){
    const itemName:string=this.addEqform.get('itemName').value;
    const pricePerDayEQ : string=this.addEqform.get('pricePerDayEQ').value;
    const description:string=this.addEqform.get('description').value;

    this.adminService.AddEquipment(itemName,pricePerDayEQ,description).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
      },
      (error) => {
        console.log('Process Cannot do this moment. Please Try Again!', error);
      }
    );

  }


}
