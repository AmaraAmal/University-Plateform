import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseSingleComponent } from './course-single/course-single.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TeachersComponent } from './teachers/teachers.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
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
import { ListLeaveRequestComponent } from './list-leave-request/list-leave-request.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
<<<<<<< HEAD
import { AddSupportCoursComponent } from './add-support-cours/add-support-cours.component';
import { ListSupportCoursComponent } from './list-support-cours/list-support-cours.component';
import { LeaveRequestByUserComponent } from './leave-request-by-user/leave-request-by-user.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
=======
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
>>>>>>> 37a1a0843d74be37d894f179096c29e03508ec2b

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CourseSingleComponent,
    CoursesComponent,
    EventsComponent,
    GalleryComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    TeachersComponent,
    RegisterComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardTeacherComponent,
    DashboardStudentComponent,
    AddNewsComponent,
    EditNewsComponent,
    ConsultNewsComponent,
    NewsAdminComponent,
    ListTeachersComponent,
    ListStudentsComponent,
    ListClaimsComponent,
    ListLeaveRequestComponent,
    AddStudentComponent,
    AddTeacherComponent,
<<<<<<< HEAD
    AddSupportCoursComponent,
    ListSupportCoursComponent,
    LeaveRequestByUserComponent,
    ProfileUserComponent,
=======
    UpdateNewsComponent,
    UpdateTeacherComponent,
    UpdateStudentComponent,

    ClaimformComponent,
    CoursByUserComponent,
    ClaimsByUserComponent,
    LeaveRequestByUserComponent,
    AddCoursComponent,
    ClaimformComponent,
    AskLeaveComponent,
    EventExempleComponent,
    UpdateClaimsAdminComponent,
    ProfileComponent,
    EditInformationComponent,
>>>>>>> 37a1a0843d74be37d894f179096c29e03508ec2b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
