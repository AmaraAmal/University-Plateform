import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskLeaveComponent } from './ask-leave.component';

describe('AskLeaveComponent', () => {
  let component: AskLeaveComponent;
  let fixture: ComponentFixture<AskLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskLeaveComponent]
    });
    fixture = TestBed.createComponent(AskLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
