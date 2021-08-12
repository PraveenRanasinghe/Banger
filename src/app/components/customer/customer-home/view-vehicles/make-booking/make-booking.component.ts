import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css'],
})
export class MakeBookingComponent implements OnInit {
  bookingForm: FormGroup;
  message: string;
  equipList: any;
  userInfo: any;
  selectedVehicle: any;
  vId: number;
  pTime: any;
  rTime: any;
  timeDifference: any;
  timeDif: any;

  pickupTime: string;
  returnTime: string;

  totalCostOfEquipments: number = 0;
  totalCostOfVehicle: number = 0;

  equipmentPriceList: any = [];

  constructor(
    private modalRef: BsModalRef,
    private spinner: NgxSpinnerService,
    private customerService: UserServiceService
  ) {}

  getPickupTime(pickupTime) {
    this.pTime = new Date(pickupTime);
    this.calculateRentalDuarion();
  }

  getReturnTime(returnTime) {
    this.rTime = new Date(returnTime);
    this.calculateRentalDuarion();
  }

  calculateRentalDuarion() {
    this.timeDifference =
      (this.rTime.getTime() - this.pTime.getTime()) / 3600000/24;
    this.calculateTotalCost(this.timeDifference);
    console.log(this.timeDifference);
  }

  calculateTotalCost(timeDifference: number) {

  }

  ngOnInit(): void {
    this.bookingInfo();
    this.getEquipmentListToModal();
    this.getLoggedInUser();
    this.getSelectedVehicle();
    this.calculateRentalDuarion();
  }


  getPrice(equipment) {
    let isFound: boolean = false;
    let totalPrice:number=0;

    for (let i = 0; i < this.equipmentPriceList.length; i++) {

      if (this.equipmentPriceList[i].equipmentId == equipment.equipmentId) {
        this.equipmentPriceList.splice(i, 1);
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      this.equipmentPriceList.push(equipment);
      for(let i=0; i<this.equipmentPriceList.length; i++){
        totalPrice = this.equipmentPriceList[i].pricePerDayEQ * this.timeDifference;
      }
    }
    this.totalCostOfVehicle = totalPrice;
  }


  onBooking() {
    this.message = undefined;
    const pickupTime: string = this.bookingForm.get('pickupTime').value;
    const returnTime: string = this.bookingForm.get('returnTime').value;

    let filter = null;

    if (this.bookingForm.value.equipment != null) {
      filter = this.bookingForm.value.equipment.map((eachID) => {
        console.log(eachID);
        return { equipmentId: Number.parseInt(eachID) };
      });
    }

    console.log(this.userInfo.email);
    this.customerService
      .userMakeABooking({
        vehicleId: this.selectedVehicle.vehicleId,
        email: this.userInfo.email,
        pickupTime: pickupTime,
        returnTime: returnTime,
        equipments: filter,
      })
      .subscribe((data: any) => {
        console.log(data);
        this.message = 'Booking Successfull!';
        this.bookingForm.reset();
      });
  }

  getMessage() {
    if (this.message === 'Booking Successfull!') {
      return 'success';
    } else {
      return 'danger';
    }
  }

  hideForm() {
    this.modalRef.hide();
  }

  getEquipmentListToModal() {
    this.customerService.getEquipmentList().subscribe((data) => {
      console.log(data);
      this.equipList = data;
    });
  }

  getLoggedInUser() {
    this.customerService
      .getLoggedInUser(JSON.parse(sessionStorage.getItem('data')).email)
      .subscribe((data) => {
        console.log(data);
        this.userInfo = data;
      });
  }

  getSelectedVehicle() {
    this.customerService.getVehicleById(this.vId).subscribe((data) => {
      this.selectedVehicle = data;
      console.log(this.vId);
    });
  }

  bookingInfo() {
    this.bookingForm = new FormGroup({
      pickupTime: new FormControl(new Date(), Validators.required),
      returnTime: new FormControl(new Date(), Validators.required),
      equipment: new FormControl(''),
      price: new FormControl(''),
    });
  }

  getSelectedEquipments() {
    this.customerService;
  }

}
