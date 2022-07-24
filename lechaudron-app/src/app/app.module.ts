import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { HttpRequestService } from './http-request.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';

import { ReserveTableComponent } from './reserve-table/reserve-table.component';
import { ReserveTableSuccessComponent } from './reserve-table-success/reserve-table-success.component';
import { ReserveTableErrorComponent } from './reserve-table-error/reserve-table-error.component';

import { BookRoomComponent } from './book-room/book-room.component';
import { BookRoomConfirmComponent } from './book-room-confirm/book-room-confirm.component';
import { BookRoomErrorComponent } from './book-room-error/book-room-error.component';
import { BookRoomSuccessComponent } from './book-room-success/book-room-success.component';

import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodOrderCartComponent } from './food-order-cart/food-order-cart.component';
import { FoodOrderCartTooFullComponent } from './food-order-cart-too-full/food-order-cart-too-full.component';
import { FoodOrderKitchenTooFullComponent } from './food-order-kitchen-too-full/food-order-kitchen-too-full.component';
import { FoodOrderSuccessComponent } from './food-order-success/food-order-success.component';
import { FoodOrderErrorComponent } from './food-order-error/food-order-error.component';

import { ContactComponent } from './contact/contact.component';
import { LegalDisclosureComponent } from './legal-disclosure/legal-disclosure.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReserveTableComponent,
    BookRoomComponent,
    FoodMenuComponent,
    FoodOrderCartComponent,
    ContactComponent,
    LegalDisclosureComponent,
    ReserveTableSuccessComponent,
    ReserveTableErrorComponent,
    BookRoomConfirmComponent,
    BookRoomErrorComponent,
    BookRoomSuccessComponent,
    FoodOrderCartTooFullComponent,
    FoodOrderKitchenTooFullComponent,
    FoodOrderSuccessComponent,
    FoodOrderErrorComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
