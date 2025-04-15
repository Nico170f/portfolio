import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoksSectionComponent } from './valoks-section.component';

describe('ValoksSectionComponent', () => {
  let component: ValoksSectionComponent;
  let fixture: ComponentFixture<ValoksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoksSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
