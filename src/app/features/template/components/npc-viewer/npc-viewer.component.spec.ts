import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcViewerComponent } from './npc-viewer.component';

describe('NpcViewerComponent', () => {
  let component: NpcViewerComponent;
  let fixture: ComponentFixture<NpcViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
