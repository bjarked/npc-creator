import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCheckmarkComponent } from './field-checkmark.component';

describe('FieldCheckmarkComponent', () => {
  let component: FieldCheckmarkComponent;
  let fixture: ComponentFixture<FieldCheckmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldCheckmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCheckmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
