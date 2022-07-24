import { Injectable } from '@angular/core';
import { ErrorHandler, Injector} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
/*Klasse um Fehler in der server.js Datei zu implementieren
  in server.js "if(errorname) throw errorname" schreiben
  Überleitung auf vorgefertigte Errorseiten
  Aufrund fehlender Datenbankverbindung grad nicht aktiv beziehungsweise nicht getestet worden
  In der Datenbank sind erstmal nur drei statt vier Trigger enthalten, um den Fehhler auszulösen
  Fehler bei Überschreitung von Raum-/Tisch-/Bestellkapazitäten
*/
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }


  handleError(error: any): void {
    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);
    console.error('Ein Fehler ist aufgetreten', error.message);
    alert(error);
}
  reserveTableError(reserveTableError: any): void {
    let router = this.injector.get(Router);
  console.log('URL: ' + router.url);
  console.error(reserveTableError);
  router.navigate(['/reserveTableError']);
  }
  bookRoomError(bookRoomError: any): void {
    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);
    console.error(bookRoomError);
    router.navigate(['/bookRoomError']);
  }
  cartToFull(cartToFull: any): void {
    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);
    console.error(cartToFull);
    router.navigate(['/foodOrderCartTooFull']);
  }
  foodOrderKitchenToFull(foodOrderKitchenToFull: any): void {
    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);
    console.error(foodOrderKitchenToFull);
    router.navigate(['/foodOrderKitchenTooFull']);
  }
  foodOrderError(foodOrderError: any): void {
    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);
    console.error(foodOrderError);
    router.navigate(['/foodOrderError']);
  }
}

