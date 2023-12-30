import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffApplicationComponent } from './staff-application.component';

describe('StaffApplicationComponent', () => {
  let component: StaffApplicationComponent;
  let fixture: ComponentFixture<StaffApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffApplicationComponent]
    });
    fixture = TestBed.createComponent(StaffApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
