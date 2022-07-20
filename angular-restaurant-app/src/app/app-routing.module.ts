import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRoomComponent } from './book-room/book-room.component';
import { ContactComponent } from './contact/contact.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';

export const routes: Routes = [
  {path: 'home', component: BookRoomComponent},
  {path: 'bookRoom', component: BookRoomComponent},
  {path: 'orderFood', component: BookRoomComponent},
  {path: 'ShoppingCart', component: BookRoomComponent},
  {path: 'menu', component: BookRoomComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'food-menu', component: FoodMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
