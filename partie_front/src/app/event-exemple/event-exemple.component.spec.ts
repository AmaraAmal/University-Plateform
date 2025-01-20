import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExempleComponent } from './event-exemple.component';

describe('EventExempleComponent', () => {
  let component: EventExempleComponent;
  let fixture: ComponentFixture<EventExempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventExempleComponent]
    });
    fixture = TestBed.createComponent(EventExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
