import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingOverviewComponent } from './lighting-overview.component';

describe('LightingOverviewComponent', () => {
  let component: LightingOverviewComponent;
  let fixture: ComponentFixture<LightingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightingOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
