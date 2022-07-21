import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ReserveTableComponent } from './reserve-table/reserve-table.component';
import { ReserveTableErrorComponent } from './reserve-table-error/reserve-table-error.component';
import { ReserveTableSuccessComponent } from './reserve-table-success/reserve-table-success.component';
import { ReserveTableConfirmComponent } from './reserve-table-confirm/reserve-table-confirm.component';

import { BookRoomComponent } from './book-room/book-room.component';
import { BookRoomConfirmComponent } from './book-room-confirm/book-room-confirm.component';
import { BookRoomErrorComponent } from './book-room-error/book-room-error.component';
import { BookRoomSuccessComponent } from './book-room-success/book-room-success.component';

import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodOrderCartTooFullComponent } from './food-order-cart-too-full/food-order-cart-too-full.component';
import { FoodOrderKitchenTooFullComponent } from './food-order-kitchen-too-full/food-order-kitchen-too-full.component';
import { FoodOrderErrorComponent } from './food-order-error/food-order-error.component';
import { FoodOrderCartComponent } from './food-order-cart/food-order-cart.component';
import { FoodOrderSuccessComponent } from './food-order-success/food-order-success.component';

import { ContactComponent } from './contact/contact.component';
import { LegalDisclosureComponent } from './legal-disclosure/legal-disclosure.component';

import { ErrorPage404Component } from './error-page404/error-page404.component';

export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'reserveTable', component: ReserveTableComponent},
  {path: 'reserveTableError', component: ReserveTableErrorComponent},
  {path: 'reserveTableSuccess', component: ReserveTableSuccessComponent},
  {path: 'reserveTableConfirm', component: ReserveTableConfirmComponent},

  {path: 'bookRoom', component: BookRoomComponent},
  {path: 'bookRoomError', component: BookRoomErrorComponent},
  {path: 'bookRoomSuccess', component: BookRoomSuccessComponent},
  {path: 'bookRoomConfirm', component: BookRoomConfirmComponent},

  {path: 'foodMenu', component: FoodMenuComponent},
  {path: 'orderFood', component: FoodOrderCartComponent},
  {path: 'ShoppingCart', component: FoodOrderCartComponent},
  {path: 'foodOrderCartTooFull', component: FoodOrderCartTooFullComponent},
  {path: 'foodOrderKitschenTooFull', component: FoodOrderKitchenTooFullComponent},
  {path: 'foodOrderError', component: FoodOrderErrorComponent},
  {path: 'foodOrderSuccess', component: FoodOrderSuccessComponent},

  {path: 'contact', component: ContactComponent},
  {path: 'legalDisclosure', component: LegalDisclosureComponent},

  {path: 'error404', component: ErrorPage404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
