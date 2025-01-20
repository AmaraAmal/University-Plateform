import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSupportCoursComponent } from './list-support-cours.component';

describe('ListSupportCoursComponent', () => {
  let component: ListSupportCoursComponent;
  let fixture: ComponentFixture<ListSupportCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSupportCoursComponent]
    });
    fixture = TestBed.createComponent(ListSupportCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
