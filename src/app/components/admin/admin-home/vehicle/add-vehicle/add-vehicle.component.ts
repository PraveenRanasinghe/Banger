import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  form : FormGroup;

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
    this.form = new FormGroup({
      'vehicleType':new  FormControl(null),
      'vehicleModel':new  FormControl(null),
      'seat':new  FormControl(null),
      'fuelType':new  FormControl(null),
      'pricePerDay':new  FormControl(null),
      'transmission':new  FormControl(null),
      'airbags':new  FormControl(null),
      'ac':new  FormControl(null)
    })
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
  }

  onUpload(){
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/admin/addVehicle', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
  }

  hideForm() {
    this.modalRef.hide();
  }

  addVehicle(){
    const vehicleType:string=this.form.get('vehicleType').value;
    const vehicleModel : string=this.form.get('vehicleModel').value;
    const seat:string=this.form.get('seat').value;
    const fuelType : string=this.form.get('fuelType').value;
    const pricePerDay:string=this.form.get('pricePerDay').value;
    const transmission : string=this.form.get('transmission').value;
    const airbags:string=this.form.get('airbags').value;
    const ac : string=this.form.get('ac').value;

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


  addVehicleImg() {

  }
}
