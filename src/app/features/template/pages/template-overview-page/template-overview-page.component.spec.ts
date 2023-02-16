import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOverviewPageComponent } from './template-overview-page.component';

describe('TemplateOverviewPageComponent', () => {
  let component: TemplateOverviewPageComponent;
  let fixture: ComponentFixture<TemplateOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOverviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
