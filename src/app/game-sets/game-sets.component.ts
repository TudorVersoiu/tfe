import { Component, OnInit } from '@angular/core';
import { Game } from '../Model/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-sets',
  templateUrl: './game-sets.component.html',
  styleUrls: ['./game-sets.component.less']
})
export class GameSetsComponent implements OnInit {

  constructor(
    public gameService: GameService
  ) { }

  public games: Game[] = [];
  public username: String = "";

  async ngOnInit() {
    this.games = await this.gameService.getGames();
  }

}
