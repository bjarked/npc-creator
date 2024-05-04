import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAreaComponent } from './field-area.component';

describe('FieldAreaComponent', () => {
  let component: FieldAreaComponent;
  let fixture: ComponentFixture<FieldAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
