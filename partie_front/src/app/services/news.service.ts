import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { News } from '../models/News';
import { TokenStorageService } from './token-storage.service'; 
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) { }

     token = this.tokenStorageService.getToken();
     headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'

    });
    addNews(news: News) {
    
    console.log('token key',this.token);
  
    return this.httpClient.post<any>('http://localhost:9091/api/news/add', news, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }



  getNewsById(id: any): Observable<any> {
    let url = 'http://localhost:9091/api/news/';
    let baseUrl = url.concat(id);
    return this.httpClient.get(baseUrl, { headers: this.headers});
  }


  deleteNews(id: any): Observable<any> {
    let url = 'http://localhost:9091/api/news/delete/';
    let baseUrl = url.concat(id);
    return this.httpClient.delete(baseUrl, { headers: this.headers});
  }
  
  getNews():Observable<any> {
    return this.httpClient.get<any>('http://localhost:9091/api/news', { headers: this.headers})
  }



  private handleError(error: any) {
    console.error('Une erreur s\'est produite lors de l\'ajout de la news:', error);
    return throwError('Erreur lors de l\'ajout de la news. Veuillez réessayer.');
  }
}
