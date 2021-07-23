import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  signout(){
    sessionStorage.removeItem('jwttoken');
    this.router.navigate(['/home']);

  }

}
