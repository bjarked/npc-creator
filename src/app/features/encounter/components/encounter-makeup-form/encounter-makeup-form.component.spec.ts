import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterMakeupFormComponent } from './encounter-makeup-form.component';

describe('EncounterMakeupFormComponent', () => {
  let component: EncounterMakeupFormComponent;
  let fixture: ComponentFixture<EncounterMakeupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterMakeupFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterMakeupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
