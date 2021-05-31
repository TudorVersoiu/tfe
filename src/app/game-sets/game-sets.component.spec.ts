import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSetsComponent } from './game-sets.component';

describe('GameSetsComponent', () => {
  let component: GameSetsComponent;
  let fixture: ComponentFixture<GameSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
