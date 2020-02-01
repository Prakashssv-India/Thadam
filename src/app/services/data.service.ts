import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl = 'https://prkapitest.azurewebsites.net/';
  //baseurl = 'http://localhost:55254';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private Http: HttpClient) {

   }

   getData() {
     return this.Http.get<any>(this.baseurl +'api/Default/GetAllDepartment');   
     //return this.Http.get<any>(this.baseurl + 'api/Default/GetAllDepartment');  
   }

   GetIssues(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain', "Access-Control-Allow-Origin": "*"}); 
    return this.Http.get<any>(this.baseurl + 'api/Default/GetAllDepartment', {headers, responseType: 'text' as 'json'});
    
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
