import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  activeMenuItem: string | null = null;
  newsClicked: boolean = false;
  teachersClicked: boolean = false;
  studentClicked: boolean = false;
  claimsClicked: boolean = false; 
  leaveRequestClicked: boolean = false;

  setActiveMenuItem(item: string) {
    this.activeMenuItem = item;
  }

  loadNews() {
    this.newsClicked = true;
    this.teachersClicked = false;
    this.studentClicked = false;
    this.claimsClicked = false;
    this.leaveRequestClicked = false;
  }

  loadTeachers() {
    this.teachersClicked = true;
    this.newsClicked = false;
    this.studentClicked = false;
    this.claimsClicked = false;
    this.leaveRequestClicked = false;
  }

  loadStudents() {
    this.studentClicked = true;
    this.newsClicked = false;
    this.teachersClicked = false;
    this.claimsClicked = false;
    this.leaveRequestClicked = false;
  }

  
  loadClaims() {
    this.claimsClicked = true;
    this.newsClicked = false;
    this.teachersClicked = false;
    this.studentClicked = false;
    this.leaveRequestClicked = false;
  }

  loadLeaveRequests() {
    this.leaveRequestClicked = true;
    this.newsClicked = false;
    this.teachersClicked = false;
    this.studentClicked = false;
    this.claimsClicked = false;
  }

}
