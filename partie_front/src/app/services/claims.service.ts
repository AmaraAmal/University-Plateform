import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { Reclamation } from '../models/Reclamation';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

  token = this.tokenStorageService.getToken();
  headers = new HttpHeaders({
   'Authorization': `Bearer ${this.token}`,
   'Content-Type': 'application/json'

 });

 addClaims(reclamation: Reclamation) {
    
  console.log('token key',this.token);

  return this.httpClient.post<any>('http://localhost:9091/api/reclamation/add', reclamation, { headers: this.headers })
    .pipe(
      catchError(this.handleError)
    );
}

private handleError(error: any) {
  console.error('Une erreur s\'est produite lors de l\'ajout de la réclamation:', error);
  return throwError('Erreur lors de l\'ajout de la réclamation. Veuillez réessayer.');
}
 }
