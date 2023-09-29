import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfkccComponent } from './afkcc.component';

describe('AfkccComponent', () => {
  let component: AfkccComponent;
  let fixture: ComponentFixture<AfkccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfkccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfkccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
