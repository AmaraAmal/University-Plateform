import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css']
})
export class DashboardTeacherComponent {

  activeMenuItem: string | null = null;
  coursClicked: boolean = false;
  claimsClicked: boolean = false;
  leaveRequestClicked: boolean = false;

  setActiveMenuItem(item: string) {
    this.activeMenuItem = item;
  }

  loadCoursByUser() {

  }

  loadClaimsByUser() {

  }

  loadLeaveRequestByUser() {

  }
}
