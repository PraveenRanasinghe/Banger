import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent implements OnInit {

  constructor(private bsModal: BsModalService) {
  }

  ngOnInit(): void {
  }

  openUpdate() {
    this.bsModal.show(UpdateComponent, {
      class: 'modal-dialog-centered modal-lg'
    })
  }

  openDelete() {
    this.bsModal.show(DeleteComponent, {
      class: 'modal-dialog-centered'
    })
  }

}
