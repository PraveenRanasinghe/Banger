import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private modalRef:BsModalRef) { }

  ngOnInit(): void {
  }

  hideForm() {
    this.modalRef.hide();
  }

}
