import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatSpellEditorComponent } from './combat-spell-editor.component';

describe('CombatSpellEditorComponent', () => {
  let component: CombatSpellEditorComponent;
  let fixture: ComponentFixture<CombatSpellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatSpellEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatSpellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
