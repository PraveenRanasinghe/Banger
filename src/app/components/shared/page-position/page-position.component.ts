import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-position',
  templateUrl: './page-position.component.html',
  styleUrls: ['./page-position.component.css']
})
export class PagePositionComponent implements OnInit {

@Input("pageName") pageName: string = "";
  constructor(private _location: Location) {
  }

  ngOnInit(): void {
  }

  Back() {
    this._location.back();
  }

}
