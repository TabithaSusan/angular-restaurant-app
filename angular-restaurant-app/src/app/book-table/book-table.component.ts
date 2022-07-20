import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  gerichte:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getGerichte() {
    return this.http.get("gerichte").subscribe(x=> {
      this.gerichte = x;
    })
  }

}
