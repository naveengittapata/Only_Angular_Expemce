import { Injectable } from '@angular/core';

  import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenceModel } from '../models/expence-model';
import { ExpenceGetComponent} from '../components/expence-get/expence-get.component';
// import {id} from '../components/expence-get/expence-get.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenceServiceService {

 


  private apiUrl = 'http://localhost:8080/me/first/exp'; // Endpoint URL to Get Data
  // private apiUrll = 'http://localhost:8080/me/first/exp1';

  //private apiUrlgetbyID ='http://localhost:8080/me/first/exp/${this.id}'
  // private apiUrlgetbyID = `http://localhost:8080/me/first/exp/${this.id}`;

  // id: number = 1; // Replace with the actual ID value you want to use
// private apiUrlgetbyID = `http://localhost:8080/me/first/exp/${id}`;



  constructor(private _http: HttpClient) {} 
  // constructor(private _http: HttpClient, private _con:ExpenceGetComponent) {} 

  getData(): Observable<any> {
      return this._http.get<any>(this.apiUrl);
  }

  
  postData(expence:ExpenceModel): Observable<ExpenceModel>{
    debugger
    console.log("this is me ");

    return this._http.post<ExpenceModel>(this.apiUrl, expence);

  }


  // getByID(id: number): Observable<ExpenceModel>{
  //   debugger
  //   return this._http.get<ExpenceModel>(this.apiUrlgetbyID);
  // }

  getByID(id: number): Observable<any> {
    const apiUrlgetbyID = `http://localhost:8080/me/first/exp/${id}`;
    return this._http.get(apiUrlgetbyID);
  }
  



}
