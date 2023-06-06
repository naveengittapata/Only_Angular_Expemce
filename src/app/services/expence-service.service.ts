import { Injectable } from '@angular/core';

  import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenceModel } from '../models/expence-model';

@Injectable({
  providedIn: 'root'
})
export class ExpenceServiceService {

  
  private apiUrl = 'http://localhost:8080/me/first/exp'; // Endpoint URL to Get Data
  // private apiUrll = 'http://localhost:8080/me/first/exp1';

  constructor(private _http: HttpClient) {} 

  getData(): Observable<any> {
      return this._http.get<any>(this.apiUrl);
  }

  
  postData(expence:ExpenceModel): Observable<ExpenceModel>{
    debugger
    console.log("this is me ");

    return this._http.post<ExpenceModel>(this.apiUrl, expence);

  }
}
