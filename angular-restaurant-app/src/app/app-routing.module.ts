import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ReserveTableComponent } from './reserve-table/reserve-table.component';
import { ReserveTableConfirmComponent } from './reserve-table-confirm/reserve-table-confirm.component';
import { ReserveTableErrorComponent } from './reserve-table-error/reserve-table-error.component';
import { ReserveTableSuccessComponent } from './reserve-table-success/reserve-table-success.component';

import { BookRoomComponent } from './book-room/book-room.component';
import { BookRoomConfirmComponent } from './book-room-confirm/book-room-confirm.component';
import { BookRoomErrorComponent } from './book-room-error/book-room-error.component';
import { BookRoomSuccessComponent } from './book-room-success/book-room-success.component';

import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodOrderCartComponent } from './food-order-cart/food-order-cart.component';
import { FoodOrderConfirmComponent } from './food-order-confirm/food-order-confirm.component';
import { FoodOrderCartTooFullComponent } from './food-order-cart-too-full/food-order-cart-too-full.component';
import { FoodOrderKitchenTooFullComponent } from './food-order-kitchen-too-full/food-order-kitchen-too-full.component';
import { FoodOrderErrorComponent } from './food-order-error/food-order-error.component';
import { FoodOrderSuccessComponent } from './food-order-success/food-order-success.component';

import { ContactComponent } from './contact/contact.component';

import { Error404Component } from './error404/error404.component';
import { combineLatest } from 'rxjs';

export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},

  {path: 'reserveTable', component: ReserveTableComponent},
  {path: 'reserveTableConfirm', component: ReserveTableConfirmComponent},
  {path: 'reserveTableError', component: ReserveTableErrorComponent},
  {path: 'reserveTableSuccess', component: ReserveTableSuccessComponent},

  {path: 'bookRoom', component: BookRoomComponent},
  {path: 'bookRoomConfirm', component: BookRoomConfirmComponent},
  {path: 'bookRoomError', component: BookRoomErrorComponent},
  {path: 'bookRoomSuccess', component: BookRoomSuccessComponent},

  {path: 'foodMenu', component: FoodMenuComponent},
  {path: 'ShoppingCart', component: FoodOrderCartComponent}, // TODO please rename to foodOrderCart when done!
  {path: 'orderFood', component: FoodOrderConfirmComponent}, // TODO please rename to foodOrderConfirm when done!
  {path: 'foodOrderCartTooFull', component: FoodOrderCartTooFullComponent},
  {path: 'foodOrderKitchenTooFull', component: FoodOrderKitchenTooFullComponent},
  {path: 'foodOrderError', component: FoodOrderErrorComponent},
  {path: 'foodOrderSuccess', component: FoodOrderSuccessComponent},

  {path: 'contact', component: ContactComponent},

  {path: 'error404', component: Error404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
