import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcCreateFormComponent } from './npc-create-form.component';

describe('NpcCreateFormComponent', () => {
  let component: NpcCreateFormComponent;
  let fixture: ComponentFixture<NpcCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
