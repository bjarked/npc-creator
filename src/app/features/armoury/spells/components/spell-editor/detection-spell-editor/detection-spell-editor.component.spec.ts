import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionSpellEditorComponent } from './detection-spell-editor.component';

describe('DetectionSpellEditorComponent', () => {
  let component: DetectionSpellEditorComponent;
  let fixture: ComponentFixture<DetectionSpellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectionSpellEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectionSpellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
