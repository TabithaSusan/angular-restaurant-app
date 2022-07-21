import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.component.html',
  styleUrls: ['./reserve-table.component.css']
})
export class ReserveTableComponent implements OnInit {

  reservedTable:any;

  constructor() { }

  ngOnInit(): void {
  }

  submit(reservedTable:any) {

    console.log("form submitted", reservedTable);
  }

}
