import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClaimsAdminComponent } from './update-claims-admin.component';

describe('UpdateClaimsAdminComponent', () => {
  let component: UpdateClaimsAdminComponent;
  let fixture: ComponentFixture<UpdateClaimsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateClaimsAdminComponent]
    });
    fixture = TestBed.createComponent(UpdateClaimsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
