import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestByUserComponent } from './leave-request-by-user.component';

describe('LeaveRequestByUserComponent', () => {
  let component: LeaveRequestByUserComponent;
  let fixture: ComponentFixture<LeaveRequestByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveRequestByUserComponent]
    });
    fixture = TestBed.createComponent(LeaveRequestByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
