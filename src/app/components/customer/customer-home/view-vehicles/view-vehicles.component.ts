import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MakeBookingComponent } from './make-booking/make-booking.component';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css'],
})
export class ViewVehiclesComponent implements OnInit {
  List: any;
  searchForm: FormGroup;

  constructor(
    private bsModal: BsModalService,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      pickupTime: new FormControl('', Validators.required),
      returnTime: new FormControl('', Validators.required),
    });
    this.getAllVehicles();
  }

  onSearch() {
    const pickupTime: string = this.searchForm.get('pickupTime').value;
    const returnTime: string = this.searchForm.get('returnTime').value;
    console.log(pickupTime);
    console.log(returnTime);
    this.userService
      .searchVehicleByPickupTimeAndReturnTime(pickupTime, returnTime)
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          const eachVehicle = data[i];
          eachVehicle.vehicleImg = `data:image/jpeg;base64,${eachVehicle.vehicleImg}`;
          data[i] = eachVehicle;
        }
        this.List = data;
      });
  }

  getAllVehicles() {
    this.userService.viewVehicles().subscribe((data) => {
      this.List = data;
    });
  }

  openBooking(vehicleId: number) {
    this.bsModal.show(MakeBookingComponent, {
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered modal-md',
      initialState: {
        vId: vehicleId,
      },
    });
  }
}
