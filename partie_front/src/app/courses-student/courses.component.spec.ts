import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SubjectComponent } from '../subject/subject.component';
import { SubjectService } from '../services/subject.service';
import { Subject } from 'src/app/models/Subject';

describe('SubjectComponent', () => {
  let component: SubjectComponent;
  let fixture: ComponentFixture<SubjectComponent>;
  let subjectServiceSpy: jasmine.SpyObj<SubjectService>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    subjectServiceSpy = jasmine.createSpyObj('SubjectService', ['getSubjects']);
    await TestBed.configureTestingModule({
      declarations: [SubjectComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of({ get: (id: string) => '1' }) } },
        { provide: SubjectService, useValue: subjectServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize subjectId', () => {
    expect(component.subjectId).toBe(0);
  });

  // Add more test cases as needed
});

