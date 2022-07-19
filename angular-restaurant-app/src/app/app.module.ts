import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPage404Component } from './error-page404/error-page404.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { FormsModule } from '@angular/forms';
import { Reservierung404Component } from './reservierung404/reservierung404.component';
import { Buchungs404Component } from './buchungs404/buchungs404.component';
import { Bestellung404Component } from './bestellung404/bestellung404.component';
import { Bestellvorgang404Component } from './bestellvorgang404/bestellvorgang404.component';
import { Reservierungsvorgang404Component } from './reservierungsvorgang404/reservierungsvorgang404.component';
import { TischSuccessComponent } from './tisch-success/tisch-success.component';
import { RaumSuccessComponent } from './raum-success/raum-success.component';
import { BestellungSuccessComponent } from './bestellung-success/bestellung-success.component';
import { BookTableComponent } from './book-table/book-table.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPage404Component,
    BookRoomComponent,
    ContactComponent,
    Reservierung404Component,
    Buchungs404Component,
    Bestellung404Component,
    Bestellvorgang404Component,
    Reservierungsvorgang404Component,
    TischSuccessComponent,
    RaumSuccessComponent,
    BestellungSuccessComponent,
    BookTableComponent,
    FoodmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
