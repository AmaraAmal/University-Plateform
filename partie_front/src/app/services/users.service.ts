import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

     token = this.tokenStorageService.getToken();
     headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'

    });
    
  getTeachers(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:9091/api/users/ENSEIGNANT', {headers: this.headers})
  }

  getUserById(id: any): Observable<any> {
    let url = 'http://localhost:9091/api/users/find/';
    let baseUrl = url.concat(id);
    return this.httpClient.get(baseUrl, { headers: this.headers});
  }

  updateTeacher(id: any, userData: User): Observable<any> {
    let url = `http://localhost:9091/api/users/update/${id}`;
    return this.httpClient.put(url, userData, { headers: this.headers });
  }

  addTeacher(userData: User): Observable<any> {
    let url = `http://localhost:9091/api/users/add`;
    return this.httpClient.post(url, userData, { headers: this.headers});
  }

 
  deleteUser(id: any):  Observable<any> {
    let url = 'http://localhost:9091/api/users/delete/';
    let baseUrl = url.concat(id);
    return this.httpClient.delete(baseUrl, { headers: this.headers});
  }


  getStudents(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:9091/api/users/ETUDIANT', {headers: this.headers})
  }

}
