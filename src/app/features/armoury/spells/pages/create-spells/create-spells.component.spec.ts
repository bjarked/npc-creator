import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpellsComponent } from './create-spells.component';

describe('CreateSpellsComponent', () => {
  let component: CreateSpellsComponent;
  let fixture: ComponentFixture<CreateSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpellsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
