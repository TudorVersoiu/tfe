import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../Model/Game';
import { UserService } from './user.service';

const gameURI = "http://localhost:3000/games";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    public httpClient: HttpClient,
    public userService: UserService
  ) { }

  public async getGames(): Promise<Game[]> {
    let games: Game[] | undefined = await this.httpClient.get<Game[]>(
      `${gameURI}/getUserGames`,
      {
        headers: {
          "Authorization": this.userService.authBearer
        },
        params: {
          "username": this.userService.Username
        }
      }
    ).toPromise();

    console.log(games);

    return (games === undefined)?[]:games;
  }
}
