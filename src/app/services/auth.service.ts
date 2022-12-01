import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    const token = localStorage.getItem('movies-token');
    if(token)
    return true;
    return false;
  }
  isAdmin(){
    const token = localStorage.getItem('movies-token');
    const middlepart = token.split('.')[1];
    const userString = window.atob(middlepart);
    const userObj = JSON.parse(userString);
    return userObj.isAdmin == 1
    
  }

  register(user: User){
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  login(user: User){
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }

  
}
