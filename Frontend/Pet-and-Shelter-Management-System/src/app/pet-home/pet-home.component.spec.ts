import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetHomeComponent } from './pet-home.component';

describe('PetHomeComponent', () => {
  let component: PetHomeComponent;
  let fixture: ComponentFixture<PetHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetHomeComponent]
    });
    fixture = TestBed.createComponent(PetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
