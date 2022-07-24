import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe, Time } from '@angular/common';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.component.html',
  styleUrls: ['./reserve-table.component.css']
})
export class ReserveTableComponent implements OnInit {


  isSubmitted = false;
  PartySize:any=['10 Personen', '25 Personen', '50 Personen', '100 Personen', '150 Personen', '200 Personen'];
  Nachname:any;
  Email:any;
  Telefonnummer:any;
  changed:Date;


  modifiedPartysize:string;
  modifiedNachname:string;
  modifiedEmail:string;
  modifiedTelefonnummer:string;
  modifiedDatum:string;

  pipe = new DatePipe('en-US');


  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    partysize:  ['', [Validators.required]],
    datum:['',[Validators.required]],
    nachname:['',[Validators.required]],
    email:  ['', [Validators.required]],
    telefonnummer:  ['', [Validators.required]],
  });

  changePartysize(e: any){
    this.partysize?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionPartysize(e.target.value);
  }

  changeNachname(e: any){
    this.nachname?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionNachname(e.target.value);
  }

  changeEmail(e: any){
    this.email?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionEmail(e.target.value);
  }

  changeTelefonnummer(e: any){
    this.telefonnummer?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.customFunctionTelefonnummer(e.target.value);
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


  customFunctionPartysize(e:any){
    this.modifiedPartysize = " "+ e;
  }

  customFunctionNachname(e:any){
    this.modifiedNachname = " "+ e;
  }

  customFunctionEmail(e:any){
    this.modifiedEmail = " "+ e;
  }

  customFunctionTelefonnummer(e:any){
    this.modifiedTelefonnummer = " "+ e;
  }


  // Access formcontrols getter
  get partysize() {
    return this.registrationForm.get('partysize');
  }

  get nachname() {
    return this.registrationForm.get('nachname');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get telefonnummer() {
    return this.registrationForm.get('telefonnummer');
  }

  get datum() {
    return this.registrationForm.get('datum');
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
