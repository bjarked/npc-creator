import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLimitsComponent } from './field-limits.component';

describe('FieldLimitsComponent', () => {
  let component: FieldLimitsComponent;
  let fixture: ComponentFixture<FieldLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldLimitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
