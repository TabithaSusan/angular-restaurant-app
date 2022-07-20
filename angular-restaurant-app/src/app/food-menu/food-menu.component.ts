import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request-service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  constructor(
    private httpRequest: HttpRequestService,
    private cartService: CartService) { 
    console.log("Test");
    this.httpRequest.getGerichte().subscribe(data => 
      this.gerichte = data
      );
  }

  gerichte:any;

  ngOnInit(): void {
  }
  
  getGerichte() {
    return this.httpRequest.getGerichte().subscribe(x=> {
      this.gerichte = x;
    })
  }
  

}
