import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { PersonalProjectsComponent } from './personal-projects.component';

describe('PersonalProjectsComponent', () => {
  let component: PersonalProjectsComponent;
  let fixture: ComponentFixture<PersonalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
