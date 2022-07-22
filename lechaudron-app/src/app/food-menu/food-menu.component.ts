import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

constructor(private httpRequest: HttpRequestService) {

  this.httpRequest.getGericht().subscribe(data =>
    this.gericht = data);
}
  gericht:any;


  ngOnInit(): void {
  }

}
