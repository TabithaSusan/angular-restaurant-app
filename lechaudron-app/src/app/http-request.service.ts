import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor( private httpClient : HttpClient) {


  }

  getGericht():Observable<any> {
    return this.httpClient.get('gericht');
  }
}
