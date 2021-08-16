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

  vehicle: any;
  timeDifference: number;
  message: string;
  bookingForm: FormGroup;
  pickupTime: Date;
  returnTime: Date;
  totalCostOfVehicle: number = 0;
  totalCostOfEqupments: number = 0;
  finalCost: number = 0;
  equipList: any;
  equipmentPriceList: any = [];


  constructor(
    private modalRef: BsModalRef,
    private spinner: NgxSpinnerService,
    private customerService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.bookingInfo();
    this.customerService.getEquipmentList().subscribe((data) => {
      this.equipList = data;
    })
    this.calculateDuration();
  }

  bookingInfo() {
    this.bookingForm = new FormGroup({
      pickupTime: new FormControl(new Date(), Validators.required),
      returnTime: new FormControl(new Date(), Validators.required),
      equipment: new FormControl(''),
      price: new FormControl(''),
    });
  }

  getPickupTime(pickupTime) {
    this.pickupTime = new Date(pickupTime);
    this.calculateDuration();
    console.log(pickupTime);
  }

  getReturnTime(returnTime) {
    this.returnTime = new Date(returnTime);
    this.calculateDuration();
    console.log(returnTime);
  }

  calculateDuration() {
    this.timeDifference = (this.returnTime.getTime() - this.pickupTime.getTime()) / 3.6e+6;
    this.totalCostOfVehicle = (((this.vehicle.pricePerDay) / 24) * this.timeDifference);
    this.finalCost = this.totalCostOfVehicle;
  }

  getEquipmentPrice(equipment) {
    let isFound: boolean = false;
    let totalPrice: number = 0;


    for (let i = 0; i < this.equipmentPriceList.length; i++) {
      if (this.equipmentPriceList[i].equipmentId == equipment.equipmentId) {
        this.equipmentPriceList.splice(i, 1);
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      this.equipmentPriceList.push(equipment);
      for (let i = 0; i < this.equipmentPriceList.length; i++) {
        totalPrice = (((this.equipmentPriceList[i].pricePerDayEQ) / 24) * this.timeDifference);
      }
    }
    this.finalCost = this.totalCostOfVehicle + totalPrice;
    console.log(this.finalCost);
  }


  onBooking() {

    this.message = undefined;
    let timePeriod: boolean = false;
    if ((this.returnTime.getTime() - this.pickupTime.getTime()) < 5) {
      this.message = "Your Booking must be more than 5 Hours!";
      timePeriod = true;
    }

    if (this.bookingForm.valid) {
      const pickupTime: Date = this.bookingForm.get('pickupTime').value;
      const returnTime: Date = this.bookingForm.get('returnTime').value;
      const price: number = this.finalCost;
      const equipment =this.equipmentPriceList;

      this.customerService
        .userMakeABooking({
          vehicleId: this.vehicle.vehicleId,
          email: JSON.parse(sessionStorage.getItem("data")).email,
          pickupTime: pickupTime,
          returnTime: returnTime,
          price: price,
          equipments: equipment,
        })
        .subscribe((data: any) => {
          console.log(data);
          this.message = 'Booking Successfull!';
          this.bookingForm.reset();
        });
    }

  }

  getMessage() {
    if (this.message === "Your Booking must be more than 5 Hours!") {
      return "success";
    }
    else {
      return "danger";
    }
  }

  hideForm() {
    this.modalRef.hide();
  }


}
