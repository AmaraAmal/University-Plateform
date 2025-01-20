import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultNewsComponent } from './consult-news.component';

describe('ConsultNewsComponent', () => {
  let component: ConsultNewsComponent;
  let fixture: ComponentFixture<ConsultNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultNewsComponent]
    });
    fixture = TestBed.createComponent(ConsultNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
