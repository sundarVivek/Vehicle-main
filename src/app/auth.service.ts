import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorServiceService } from './error-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl:any="http://localhost:3000/user";
  apiWebApiUrl:any="http://localhost:5121/api/Auth";
  // apiUrlService:any="http://localhost:3000/service";

  constructor(private http:HttpClient, private errorService:ErrorServiceService) { }

// getUser(){
//   return this.http.get(this.apiUrl);
// }
// getUserBYId(id:any){
//   return this.http.get<any>(`${this.apiUrl}/${id}`);
// }
postUser(userData:any){
// return this.http.post<any>(this.apiWebApiUrl,userData); //register
return this.http.post<any>(this.apiWebApiUrl,userData);
}
getUser(){
  return this.http.get<any>(this.apiWebApiUrl);
}
}