import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSideBarComponent } from './game-side-bar.component';

describe('GameSideBarComponent', () => {
  let component: GameSideBarComponent;
  let fixture: ComponentFixture<GameSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameSideBarComponent]
    });
    fixture = TestBed.createComponent(GameSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
