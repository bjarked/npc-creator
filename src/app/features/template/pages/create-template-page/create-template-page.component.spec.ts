import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemplatePageComponent } from './create-template-page.component';

describe('CreateTemplatePageComponent', () => {
  let component: CreateTemplatePageComponent;
  let fixture: ComponentFixture<CreateTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTemplatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
