import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleQuickMenuComponent } from './rule-quick-menu.component';

describe('RuleQuickMenuComponent', () => {
  let component: RuleQuickMenuComponent;
  let fixture: ComponentFixture<RuleQuickMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleQuickMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleQuickMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
