import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-scrapped-details',
  templateUrl: './scrapped-details.component.html',
  styleUrls: ['./scrapped-details.component.css']
})
export class ScrappedDetailsComponent implements OnInit {

  List:any

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.getScrappedResults();
  }

  getScrappedResults(){
    this.adminService.getScrappedDetails().subscribe((data)=>{
      this.List=data;
    });
  }

}
