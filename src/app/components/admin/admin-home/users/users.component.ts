import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {AddToBlacklistComponent} from './add-to-blacklist/add-to-blacklist.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private bsModal: BsModalService) {
  }

  ngOnInit(): void {
  }

  addToBlackList() {
    this.bsModal.show(AddToBlacklistComponent, {
      class: 'modal-dialog-centered'
    })
  }
}
