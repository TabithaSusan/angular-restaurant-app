import { NgModule } from '@angular/core';
import { Injectable, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpRequestService } from './http-request-service';
import { CartService } from './cart.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';

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

import {}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReserveTableConfirmComponent,
    ReserveTableErrorComponent,
    ReserveTableSuccessComponent,
    BookRoomComponent,
    BookRoomConfirmComponent,
    BookRoomErrorComponent,
    BookRoomSuccessComponent,
    FoodMenuComponent,
    FoodOrderCartComponent,
    FoodOrderConfirmComponent,
    FoodOrderCartTooFullComponent,
    FoodOrderKitchenTooFullComponent,
    FoodOrderErrorComponent,
    FoodOrderSuccessComponent,
    ContactComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Injectable,
    Type
  ],
  providers: [
    HttpRequestService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
