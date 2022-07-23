import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
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

    this.httpRequest.getGericht().subscribe(data =>
    this.gericht = data);
}
  gericht:any;

  addToCart(fooditem: any) {
    this.cartService.addToCart(fooditem);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }

}
