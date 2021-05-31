import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-equip',
  templateUrl: './update-equip.component.html',
  styleUrls: ['./update-equip.component.css']
})
export class UpdateEquipComponent implements OnInit {

  constructor(private modalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

}
