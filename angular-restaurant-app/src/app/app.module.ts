import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './http-request-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartService } from './cart.service';

import { ContactComponent } from './contact/contact.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { FormsModule } from '@angular/forms';
import { Bestellung404Component } from './bestellung404/bestellung404.component';
import { Bestellvorgang404Component } from './bestellvorgang404/bestellvorgang404.component';
import { BestellungSuccessComponent } from './bestellung-success/bestellung-success.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';

import { ReserveTableComponent } from './reserve-table/reserve-table.component';
import { ReserveTableErrorComponent } from './reserve-table-error/reserve-table-error.component';
import { ReserveTableSuccessComponent } from './reserve-table-success/reserve-table-success.component';
import { ReserveTableConfirmComponent } from './reserve-table-confirm/reserve-table-confirm.component';
import { BookRoomConfirmComponent } from './book-room-confirm/book-room-confirm.component';
import { BookRoomErrorComponent } from './book-room-error/book-room-error.component';
import { BookRoomSuccessComponent } from './book-room-success/book-room-success.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPage404Component,
    BookRoomComponent,
    ContactComponent,
    Bestellung404Component,
    Bestellvorgang404Component,
    BestellungSuccessComponent,
    NavbarComponent,
    FooterComponent,
    FoodMenuComponent,
    ReserveTableComponent,
    ReserveTableErrorComponent,
    ReserveTableSuccessComponent,
    ReserveTableConfirmComponent,
    BookRoomConfirmComponent,
    BookRoomErrorComponent,
    BookRoomSuccessComponent
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
