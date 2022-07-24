import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

  isSubmitted = false;
  AnzahlPersonen: any =['10 Personen', '25 Personen', '50 Personen', '100 Personen', '150 Personen', '200 Personen'];
  KellnerAuswahl: any =['Jay Mustermann', 'Phil Robert', 'Gloria Delgado', 'Claire Prittchet', 'Haley Dunphy', 'Cameron Tucker'];
  MenuAuswahl: any =['Hochzeitsmenü', 'Nachspeise', 'Vorspeise', 'Hauptmenü', 'Geburtstagsmenü'];
  RaumAuswahl: any =['Party Raum', 'Bar', 'Luxus Raum', 'Raum mit Balkon'];
  
  modifiedAnzahlPersonen:string;
  modifiedKellner:string;
  modifiedMenu:string;
  modifiedRaum:string;
  
  
  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    anzahlPersonen:  ['', [Validators.required]],
    kellnerAuswahl:  ['', [Validators.required]],
    menuAuswahl:  ['', [Validators.required]],
    raumAuswahl:  ['', [Validators.required]],
  });

  changeAnzahlPersonen(e: any){
    this.anzahlPersonen?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionAnzahlPersonen(e.target.value);
  }

  changeKellnerAuswahl(e: any){
    this.kellnerAuswahl?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionKellner(e.target.value);
  }

  changeMenuAuswahl(e: any){
    this.menuAuswahl?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionMenu(e.target.value);
  }

  changeRaumAuswahl(e: any){
    this.raumAuswahl?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionRaum(e.target.value);
  }

  customFunctionAnzahlPersonen(e:any){
    this.modifiedAnzahlPersonen = " "+ e;
  }

  customFunctionKellner(e:any){
    this.modifiedKellner = " "+ e;
  }

  customFunctionMenu(e:any){
    this.modifiedMenu = " "+ e;
  }

  customFunctionRaum(e:any){
    this.modifiedRaum = " "+ e;
  }



  // Access formcontrols getter
  get cityName() {
    return this.registrationForm.get('cityName');
  }

  get anzahlPersonen() {
    return this.registrationForm.get('anzahlPersonen');
  }

  get kellnerAuswahl() {
    return this.registrationForm.get('kellnerAuswahl');
  }

  get menuAuswahl() {
    return this.registrationForm.get('menuAuswahl');
  }

  get raumAuswahl() {
    return this.registrationForm.get('raumAuswahl');
  }


  onSubmit(): void {
    console.log(this.registrationForm);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }


  /*

 submit(reserve:any){
  console.log("Form submitted",reserve)
 }

*/

  ngOnInit(): void {

  }

}








