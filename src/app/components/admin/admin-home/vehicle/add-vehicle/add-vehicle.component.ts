import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  addVehicleform : FormGroup;

  constructor(private modalRef: BsModalRef,
              private adminService:AdminServiceService,
              private httpClient: HttpClient) {}

            selectedFile :File;
            retrievedImage: any;
            base64Data: any;
            retrieveResonse: any;
            message: string;
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
      'ac':new  FormControl(null, Validators.required)
    })
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
  }



  onUpload(){
    console.log(this.selectedFile);



  }

  hideForm() {
    this.modalRef.hide();
  }

  addVehicle(){
    const vehicleType:string=this.addVehicleform.get('vehicleType').value;
    const vehicleModel : string=this.addVehicleform.get('vehicleModel').value;
    const seat:string=this.addVehicleform.get('seat').value;
    const fuelType : string=this.addVehicleform.get('fuelType').value;
    const pricePerDay:string=this.addVehicleform.get('pricePerDay').value;
    const transmission : string=this.addVehicleform.get('transmission').value;
    const airbags:string=this.addVehicleform.get('airbags').value;
    const ac : string=this.addVehicleform.get('ac').value;
    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/admin/addVehicle', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );

    this.adminService.AddVehicle(vehicleModel,vehicleType,seat,fuelType,pricePerDay,transmission,airbags,ac).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
      },
      (error) => {
        console.log('Error Occured!', error);
      }
    );
  }

}
