import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterViewerPageComponent } from './encounter-viewer-page.component';

describe('EncounterViewerPageComponent', () => {
  let component: EncounterViewerPageComponent;
  let fixture: ComponentFixture<EncounterViewerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterViewerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterViewerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
