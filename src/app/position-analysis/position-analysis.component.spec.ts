import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionAnalysisComponent } from './position-analysis.component';

describe('PositionAnalysisComponent', () => {
  let component: PositionAnalysisComponent;
  let fixture: ComponentFixture<PositionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
