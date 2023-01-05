import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../Model/Game';
import { AnalysisService } from '../services/AnalysisService/analysis.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-sets',
  templateUrl: './game-sets.component.html',
  styleUrls: ['./game-sets.component.less']
})
export class GameSetsComponent implements OnInit {

  constructor(
    public gameService: GameService,
    public analysisService: AnalysisService,
    public router: Router
  ) { }

  public games: Game[] = [];
  public username: String = "";

  async ngOnInit() {
    this.fetchGames();
  }

  async fetchGames() {
    this.games = await this.gameService.getGames();
  }

  public async viewGame(gameId: String)
  {
    this.analysisService.gameId = gameId;
    this.analysisService.moveNr = 0;
    this.router.navigate(['position-analysis']);
  }

  public async analyseGame(gameId: String) {
    this.analysisService.analyseGame(gameId);
    console.log("a fost dat click pe buton special de analiza");
  }
}
