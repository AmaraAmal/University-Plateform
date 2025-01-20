import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectService } from '../services/subject.service';
import { Course } from '../models/Course';
import { Subject } from '../models/Subject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']

})

export class SubjectComponent implements OnInit {
[x: string]: any;
  subjects: Subject[] = [];
  subjectId: number = 0;
  activeSubjectId: number | null = null;
  courses: Course[] = []; // Initialize courses as an empty array

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.loadSubjects();
    this.route.paramMap.subscribe(params => {
      this.subjectId = +(params?.get('id') ?? 0);
      if (this.subjectId > 0) {
        this.loadCourses(); // Load courses when subject ID is available
      }
    });
  }

  loadSubjects() {
    this.subjectService.getSubjects().subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  loadCourses() {
    this.subjectService.getCoursesBySubjectId(this.subjectId).subscribe(courses => {
      this.courses = courses;
    });
  }

  toggleCourses(subjectId: number) {
    if (this.activeSubjectId === subjectId) {
      this.activeSubjectId = null;
      this.courses = []; // Clear courses when toggling off
    } else {
      this.activeSubjectId = subjectId;
      this.loadCourses(); // Load courses for the selected subject
    }
  }
  
}
