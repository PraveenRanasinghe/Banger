import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  constructor(private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }


}
