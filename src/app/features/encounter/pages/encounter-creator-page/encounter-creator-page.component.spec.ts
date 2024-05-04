import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterCreatorPageComponent } from './encounter-creator-page.component';

describe('EncounterCreatorPageComponent', () => {
  let component: EncounterCreatorPageComponent;
  let fixture: ComponentFixture<EncounterCreatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterCreatorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
