import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(private bsModal : BsModalService) { }

  ngOnInit(): void {
  }

  openAddEquipment(){
    this.bsModal.show(AddEquipmentComponent,{
      class:'modal-dialog-centered modal-lg'
    })
  }

}
