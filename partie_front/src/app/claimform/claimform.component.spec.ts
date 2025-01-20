import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimformComponent } from './claimform.component';

describe('ClaimformComponent', () => {
  let component: ClaimformComponent;
  let fixture: ComponentFixture<ClaimformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimformComponent]
    });
    fixture = TestBed.createComponent(ClaimformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
