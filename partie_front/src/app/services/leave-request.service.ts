import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Observable, catchError, throwError } from 'rxjs';
import { LeaveRequest } from '../models/LeaveRequest';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

  token = this.tokenStorageService.getToken();
     headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'

    });

    addLeaveRequest(request: LeaveRequest) {
    
      console.log('token key',this.token);
    
      return this.httpClient.post<any>('http://localhost:9091/api/timeoff/add', request, { headers: this.headers })
        .pipe(
          catchError(this.handleError)
        );
    }

    getListLeaveRequest():Observable<any> {
      return this.httpClient.get<any>('http://localhost:9091/api/timeoff', { headers: this.headers})
    }

    deleteLeaveRequest(id: any): Observable<any> {
      let url = 'http://localhost:9091/api/timeoff/delete/';
      let baseUrl = url.concat(id);
      return this.httpClient.delete(baseUrl, { headers: this.headers});
    }

    private handleError(error: any) {
      console.error('Une erreur s\'est produite lors de l\'ajout de la news:', error);
      return throwError('Erreur lors de l\'ajout de la news. Veuillez réessayer.');
    }
}
