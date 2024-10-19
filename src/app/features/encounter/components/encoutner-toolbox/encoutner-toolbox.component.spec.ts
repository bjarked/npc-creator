import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoutnerToolboxComponent } from './encoutner-toolbox.component';

describe('EncoutnerToolboxComponent', () => {
  let component: EncoutnerToolboxComponent;
  let fixture: ComponentFixture<EncoutnerToolboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoutnerToolboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncoutnerToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
