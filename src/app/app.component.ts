import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Banger';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('localhost:8080/home').subscribe((data) => {
      console.log(data);
    });
  }
}
