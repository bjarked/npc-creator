import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHeaderDropdownComponent } from './button-header-dropdown.component';

describe('ButtonHeaderDropdownComponent', () => {
  let component: ButtonHeaderDropdownComponent;
  let fixture: ComponentFixture<ButtonHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
