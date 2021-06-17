import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  form : FormGroup;
  constructor(private modalRef: BsModalRef,
    private adminService:AdminServiceService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'itemName':new  FormControl(null),
      'pricePerDayEQ':new  FormControl(null),
      'description':new  FormControl(null)
    })
  }

  hideForm() {
    this.modalRef.hide();
  }

  onAddEquipment(){
    const itemName:string=this.form.get('itemName').value;
    const pricePerDayEQ : string=this.form.get('pricePerDayEQ').value;
    const description:string=this.form.get('description').value;

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

  onSubmit(){

  }

}
