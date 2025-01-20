import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8083/api/courses';

  constructor(private http: HttpClient) { }

  getCoursesBySubjectId(subjectId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}?subjectId=${subjectId}`);
  }
}
