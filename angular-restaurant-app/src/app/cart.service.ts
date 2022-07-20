import { Injectable } from '@angular/core';
import { FoodMenuComponent } from './food-menu/food-menu.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: FoodMenuComponent["gerichte"][] = [];

  addToCart(gericht: FoodMenuComponent["gerichte"]) {
    this.items.push(gericht);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
