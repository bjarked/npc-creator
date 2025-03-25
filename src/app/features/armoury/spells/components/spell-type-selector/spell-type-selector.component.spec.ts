import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellTypeSelectorComponent } from './spell-type-selector.component';

describe('SpellTypeSelectorComponent', () => {
  let component: SpellTypeSelectorComponent;
  let fixture: ComponentFixture<SpellTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellTypeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
