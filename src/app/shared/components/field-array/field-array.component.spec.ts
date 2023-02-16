import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldArrayComponent } from './field-array.component';

describe('FieldArrayComponent', () => {
  let component: FieldArrayComponent;
  let fixture: ComponentFixture<FieldArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
