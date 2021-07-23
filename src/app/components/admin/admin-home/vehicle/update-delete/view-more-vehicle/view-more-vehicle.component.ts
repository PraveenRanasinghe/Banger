import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-more-vehicle',
  templateUrl: './view-more-vehicle.component.html',
  styleUrls: ['./view-more-vehicle.component.css']
})
export class ViewMoreVehicleComponent implements OnInit {

  constructor(private modalRef: BsModalRef) {}

ngOnInit(): void {
}

hideForm() {
this.modalRef.hide();
}


}
