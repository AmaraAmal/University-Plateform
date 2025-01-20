import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Subject } from '../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  getCoursesBySubjectId(subjectId: number): Observable<import("../models/Course").Course[]> {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8083/api/subjects'; // Adjust the URL according to your backend API

  constructor(private httpClient: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred while fetching subjects:', error);
    return throwError(error);
  }
}
