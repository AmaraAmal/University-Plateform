import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service'; 
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authApi = 'http://localhost:9091/api/v1/auth/';
  isLoggedIn=false;


  constructor(private http: HttpClient , private tokenStorageService:TokenStorageService) {}


   public login(email: string, password: string): Observable<any> {
    return this.http.post(this.authApi + 'authenticate', {
      email,
      password
    }, httpOptions);
  } 

  public register(firstName: string, lastName: string, email: string, phoneNumber: string, password: string, role: string): Observable<any> {
    return this.http.post(this.authApi + 'register', {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      role
      
    }, httpOptions);
  }

 
}
