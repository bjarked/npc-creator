import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionMonitorComponent } from './condition-monitor.component';

describe('ConditionMonitorComponent', () => {
  let component: ConditionMonitorComponent;
  let fixture: ComponentFixture<ConditionMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
