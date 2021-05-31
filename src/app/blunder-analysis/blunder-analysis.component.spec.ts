import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlunderAnalysisComponent } from './blunder-analysis.component';

describe('BlunderAnalysisComponent', () => {
  let component: BlunderAnalysisComponent;
  let fixture: ComponentFixture<BlunderAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlunderAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlunderAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
