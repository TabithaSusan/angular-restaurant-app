import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request-service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  gerichte:any;

  constructor(private httpRequest: HttpRequestService) { }

  ngOnInit(): void {
  }

  getGerichte() {
    return this.httpRequest.getGerichte()
      .subscribe(arg => this.gerichte = arg);

  }

}
