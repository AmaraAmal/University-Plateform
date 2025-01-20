import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CourseComponent implements OnInit {

  @Input() subjectId: number=0;
  courses: Course[]=[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    if (this.subjectId) {
      this.loadCourses();
    }
  }

  loadCourses() {
    this.courseService.getCoursesBySubjectId(this.subjectId).subscribe(courses => {
      this.courses = courses;
    });
  }
  
}
