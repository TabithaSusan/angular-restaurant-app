import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookTableComponent } from './book-table/book-table.component';
import { Reservierung404Component } from './reservierung404/reservierung404.component';
import { Reservierungsvorgang404Component } from './reservierungsvorgang404/reservierungsvorgang404.component';
import { TischSuccessComponent } from './tisch-success/tisch-success.component';

import { BookRoomComponent } from './book-room/book-room.component';
import { Buchungs404Component } from './buchungs404/buchungs404.component';
import { RoomBookConfirmComponent } from './room-book-confirm/room-book-confirm.component';
import { RaumSuccessComponent } from './raum-success/raum-success.component';


import { FoodMenuComponent } from './food-menu/food-menu.component';
import { Bestellung404Component } from './bestellung404/bestellung404.component';
import { Bestellvorgang404Component } from './bestellvorgang404/bestellvorgang404.component';
import { BestellungSuccessComponent } from './bestellung-success/bestellung-success.component';

import { ContactComponent } from './contact/contact.component';

import { ErrorPage404Component } from './error-page404/error-page404.component';
import { combineLatest } from 'rxjs';





export const routes: Routes = [
  {path: 'home', component: BookRoomComponent},

  {path: 'book-table', component: BookTableComponent},
  {path: 'bookTableError', component: Reservierung404Component},
  {path: 'bookTableSuccess', component: TischSuccessComponent},

  {path: 'bookRoom', component: BookRoomComponent},
  {path: 'bookRoomError' , component: Buchungs404Component},
  {path: 'bookConfirmation', component: RoomBookConfirmComponent},
  {path: 'bookRoomSuccess', component: RaumSuccessComponent},

  {path: 'menu', component: FoodMenuComponent},

  {path: 'orderFood', component: BookRoomComponent},
  {path: 'ShoppingCart', component: BookRoomComponent},

  {path: 'contact', component: ContactComponent},

  {path: 'error404', component:ErrorPage404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
