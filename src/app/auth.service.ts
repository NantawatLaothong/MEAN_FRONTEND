import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './auth/auth-login/user.model';

export interface AuthResponseData {
    "success": boolean,
    "message": string,
    "token": string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signup(signupData: any):Observable<any>{
    return this.http.post<AuthResponseData>('http://localhost:3000/users/register', signupData);
  }

  login(authData: any):Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>('http://localhost:3000/users/login', authData);
  }

  getToken() {
    return localStorage.getItem('token')
  }
}