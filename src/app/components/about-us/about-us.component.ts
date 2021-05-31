import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  ourMission: string = `BANGER car rental is dedication to
    the highest quality of customer service delivered with a sense of warmth,
    friendliness, individual pride, and company spirit.`;

  ourVision: string = `To create a better everyday life for many people
   to enjoy their travelling life with much more comfortable`;

  ourService: string = `Satisfaction is a rating. Loyalty is a brand.
    There for we are here to give our best service to our customers.`;

  constructor() {
  }

  ngOnInit(): void {
  }

}
