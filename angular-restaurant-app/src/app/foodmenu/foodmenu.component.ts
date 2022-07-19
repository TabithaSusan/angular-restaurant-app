import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../http-request-service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {

  constructor(private httpRequest: HttpRequestService) { 
    console.log("Test");
    this.httpRequest.getGerichte().subscribe(data => 
      this.gerichte = data
      );
  }

  gerichte:any;

  ngOnInit(): void {
  }

}
