import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    contactForm: FormGroup;
  }
  
  



}
