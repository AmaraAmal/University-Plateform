import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Reclamation } from '../models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationsService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }
  

  token = this.tokenStorageService.getToken();
     headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'

    });

  getClaims():Observable<any> {
    return this.httpClient.get<any>('http://localhost:9091/api/reclamation', { headers: this.headers})
  }

  deleteClaims(id: any): Observable<any> {
    let url = 'http://localhost:9091/api/reclamation/delete/';
    let baseUrl = url.concat(id);
    return this.httpClient.delete(baseUrl, { headers: this.headers});
  }

  addClaim(reclamation: Reclamation) {
    console.log('token key',this.token);
    return this.httpClient.post<any>('http://localhost:9091/api/reclamation/add', reclamation, { headers: this.headers })
    .pipe(
      catchError(this.handleError)
    );
}


  getClaimsById(id: any): Observable<any> {
    let url = 'http://localhost:9091/api/reclamation/';
    let baseUrl = url.concat(id);
    return this.httpClient.get(baseUrl, { headers: this.headers});
  }

  getClaimsByUser(userId: any): Observable<any> {
    let url = 'http://localhost:9091/api/reclamation/user/';
    let baseUrl = url.concat(userId);
    return this.httpClient.get(baseUrl, { headers: this.headers});
  }

  private handleError(error: any) {
    console.error('Une erreur s\'est produite lors de l\'ajout de la news:', error);
    return throwError('Erreur lors de l\'ajout de la news. Veuillez réessayer.');
  }
}
