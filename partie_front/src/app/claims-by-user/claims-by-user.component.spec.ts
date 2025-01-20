import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsByUserComponent } from './claims-by-user.component';

describe('ClaimsByUserComponent', () => {
  let component: ClaimsByUserComponent;
  let fixture: ComponentFixture<ClaimsByUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimsByUserComponent]
    });
    fixture = TestBed.createComponent(ClaimsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
