import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseSingleComponent } from './course-single/course-single.component';
import { CourseComponent } from './courses-student/courses.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardTeacherComponent } from './dashboard-teacher/dashboard-teacher.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { ConsultNewsComponent } from './consult-news/consult-news.component';
import { NewsAdminComponent } from './news-admin/news-admin.component';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ListClaimsComponent } from './list-claims/list-claims.component';
import { LeaveRequest } from './models/LeaveRequest';
import { ListLeaveRequestComponent } from './list-leave-request/list-leave-request.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { SubjectComponent } from './subject/subject.component';

import { UpdateNewsComponent } from './update-news/update-news.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ClaimformComponent } from './claimform/claimform.component';
import { CoursByUserComponent } from './cours-by-user/cours-by-user.component';
import { ClaimsByUserComponent } from './claims-by-user/claims-by-user.component';
import { LeaveRequestByUserComponent } from './leave-request-by-user/leave-request-by-user.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { AskLeaveComponent } from './ask-leave/ask-leave.component';
import { EventExempleComponent } from './event-exemple/event-exemple.component';
import { UpdateClaimsAdminComponent } from './update-claims-admin/update-claims-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { EditInformationComponent } from './edit-information/edit-information.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'course-single', component: CourseSingleComponent},
  { path: 'courses', component: CourseComponent},
  { path: 'events', component: EventsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'news', component: NewsComponent},
  { path: 'teachers', component : TeachersComponent},
  { path: 'login', component : LoginComponent},
  { path: 'register', component : RegisterComponent},
  { path : 'dashboardAdmin', component : DashboardAdminComponent},
  { path : 'dashboardTeacher', component : DashboardTeacherComponent},
  { path : 'dashboardStudent', component : DashboardStudentComponent},
  { path : 'addNews', component : AddNewsComponent},
  { path : 'editNews', component : EditNewsComponent},
  { path : 'consultNews', component : ConsultNewsComponent},
  { path : 'newsAdmin', component : NewsAdminComponent},
  { path : 'listTeachers', component : ListTeachersComponent},
  { path : 'listStudents', component : ListStudentsComponent},
  { path : 'listLeaveRequest', component : ListLeaveRequestComponent},
  { path : 'claimsList', component : ListClaimsComponent},
  { path : 'listLeaveRequests', component : ListLeaveRequestComponent},
  { path : 'addStudent', component : AddStudentComponent},
  { path : 'addTeacher', component: AddTeacherComponent},
  { path : 'subjects', component: SubjectComponent },
  { path : 'addClaim' , component : ClaimformComponent },
  { path : 'coursByUser/:id', component: CoursByUserComponent},
  { path : 'claimsByUser/:id', component: ClaimsByUserComponent},
  { path : 'leaveRequestByUser/:id', component: LeaveRequestByUserComponent},
  { path : 'addCours', component: AddCoursComponent},
  { path : 'updateClaim/:id', component: UpdateClaimsAdminComponent},
  { path : 'claimsByUser/:id', component: ClaimsByUserComponent},
 
  { path : 'updateNews/:id', component: UpdateNewsComponent},
  { path : 'updateTeacher/:id', component: UpdateTeacherComponent},
  { path : 'updateStudent/:id', component: UpdateStudentComponent},
  { path : 'leave', component : AskLeaveComponent},
  { path : 'eventExemple' , component : EventExempleComponent},



  { path : 'profile' , component : ProfileComponent},
  { path : 'edit' , component : EditInformationComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
