import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-order-cart',
  templateUrl: './food-order-cart.component.html',
  styleUrls: ['./food-order-cart.component.css']
})
export class FoodOrderCartComponent implements OnInit {

   items: any = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
