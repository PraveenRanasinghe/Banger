import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private router :  Router) {
  }

  ngOnInit(): void {
  }

  signout(){
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/home']);

  }

}
