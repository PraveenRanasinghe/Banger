import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-equip',
  templateUrl: './delete-equip.component.html',
  styleUrls: ['./delete-equip.component.css']
})
export class DeleteEquipComponent implements OnInit {

  constructor(private bsModal:BsModalRef) { }

  ngOnInit(): void {
  }

  hideForm(){
    this.bsModal.hide();
  }
}
