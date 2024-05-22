import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WebapiService {
  //  CONFIGURATION
  private webApi = "https://localhost:7225/api";
  private bcApi = "http://192.168.1.11:80"
  private headers = {'headers':{ 'Content-Type': 'application/json'}} 
  // ACCESS ENDPOINTS
  private createUserUrl:string = `${this.webApi}/Users/create_account`;
  private createOrchardUrl:string = `${this.webApi}/Orchards/create_orchard`;
  private newTransactionUrl: string = `${this.bcApi}/newTransaction`

  constructor(private http: HttpClient) { }

  /* METODOS POST */
  createUser(body: any): Observable<any>{
    return this.http.post<any>(this.createUserUrl, body, this.headers);
  }

  createOrchard(body:any): Observable<any>{
    return this.http.post<any>(this.createOrchardUrl, body, this.headers);
  }

  newTransaction(body:any): Observable<any>{
    return this.http.post<any>(this.newTransactionUrl, body, this.headers);
  }
}
