import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './http-request-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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

@NgModule({
  declarations: [
    AppComponent,
    ErrorPage404Component,
    BookRoomComponent,
    ContactComponent,
    FooterComponent,
    FoodMenuComponent,
    ReserveTableComponent,
    ReserveTableErrorComponent,
    ReserveTableSuccessComponent,
    ReserveTableConfirmComponent,
    BookRoomConfirmComponent,
    BookRoomErrorComponent,
    BookRoomSuccessComponent,
    HeaderComponent,
    FoodOrderCartTooFullComponent,
    FoodOrderKitchenTooFullComponent,
    FoodOrderErrorComponent,
    FoodOrderCartComponent,
    FoodOrderSuccessComponent,
    HomeComponent,
    LegalDisclosureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpRequestService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
