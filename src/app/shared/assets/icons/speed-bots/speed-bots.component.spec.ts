import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedBotsComponent } from './speed-bots.component';

describe('SpeedBotsComponent', () => {
  let component: SpeedBotsComponent;
  let fixture: ComponentFixture<SpeedBotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedBotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
