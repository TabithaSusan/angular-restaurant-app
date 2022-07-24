import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe, Time } from '@angular/common';
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';

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
  changed:Date;
  changedUhrzeit:Time;

  modifiedAnzahlPersonen:string;
  modifiedKellner:string;
  modifiedMenu:string;
  modifiedRaum:string;
  modifiedDatum:string;
  modifiedUhrzeit:string;
  
  pipe = new DatePipe('en-US');
  pipeTime = new DatePipe('en-US');
 
  
  
  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    anzahlPersonen:  ['', [Validators.required]],
    datum:['',[Validators.required]],
    uhrzeit:['',[Validators.required]],
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

  changeFormat(changed:any) {
    let ChangedFormat = this.pipe.transform(this.changed, 'dd/MM/YYYY');
    this.modifiedDatum = ChangedFormat as string;
    //this.modifiedDatum = ChangedFormat;
  }

  onClick() {
    this.changeFormat(this.changed);
    console.log(this.modifiedDatum);
  }

  changeDatum(e: any) {
    this.datum?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionDatum(e.target.value);
  }

  customFunctionDatum(e:any){
    this.modifiedDatum = " "+ e;
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

  get datum() {
    return this.registrationForm.get('datum');
  }

  get uhrzeit(){
    return this.registrationForm.get("uhrzeit");
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


  ngOnInit(): void {

  }

}








