import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpRequest} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
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
import { FormsModule } from '@angular/forms';
import { FoodMenuErrorComponent } from './food-menu-error/food-menu-error.component';
import { FoodMenuSuccessComponent } from './food-menu-success/food-menu-success.component';
import { FoodMenuOrderSuccessComponent } from './food-menu-order-success/food-menu-order-success.component';
import { FoodMenuOrderCartTooFullComponent } from './food-menu-order-cart-too-full/food-menu-order-cart-too-full.component';
import { FoodMenuOrderKitchenTooFullComponent } from './food-menu-order-kitchen-too-full/food-menu-order-kitchen-too-full.component';
import { FoodMenuOrderErrorComponent } from './food-menu-order-error/food-menu-order-error.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    FooterMenuComponent,
    HomeComponent,
    ReserveTableComponent,
    ReserveTableConfirmComponent,
    ReserveTableErrorComponent,
    ReserveTableSuccessComponent,
    BookRoomComponent,
    BookRoomConfirmComponent,
    BookRoomErrorComponent,
    BookRoomSuccessComponent,
    FoodMenuComponent,
    FoodMenuErrorComponent,
    FoodMenuSuccessComponent,
    FoodMenuOrderSuccessComponent,
    FoodMenuOrderCartTooFullComponent,
    FoodMenuOrderKitchenTooFullComponent,
    FoodMenuOrderErrorComponent,
    ContactComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpRequestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
