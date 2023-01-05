import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
const gameURI = "http://localhost:3000/games";

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  constructor(
    public httpClient: HttpClient,
    public userService: UserService
  ) { }

  public gameId: String = String("0");
  public moveNr = Number(0);
  
  public async getPosition(): Promise<any[]> {
    let games:any = await this.httpClient.get<any>(
      `${gameURI}/getPosition`,
      {
        headers: {
          "Authorization": this.userService.authBearer,
          "Pragma": 'no-cache'
        },
        params: {
          "gameId": this.gameId.toString(),
          "moveNumber": this.moveNr
        }
      }
    ).toPromise();
    console.log(games);
    return games;
  }

  public async getAnalysis(gameId: String, moveNr: Number): Promise<any> {
    //return this.hardCodedAnalysis();
    let games:any = await this.httpClient.get<any>(
      `${gameURI}/getAnalysis`,
      {
        headers: {
          "Authorization": this.userService.authBearer,
          'Pragma': 'no-cache'
        },
        params: {
          "gameId": this.gameId.toString(),
          "moveNumber": this.moveNr
        }
      }
    ).toPromise();
    console.log(games);
    return games;
  }

  public async analyseGame(gameId: String)
  {
    await this.httpClient.post<any>(
      `${gameURI}/analyze/`,
      {
        headers: {
          "Authorization": this.userService.authBearer
        },
        "gameId": gameId
      }
    ).toPromise();
  }

  private hardCodedAnalysis()
  {
    let score_list = [];


    score_list.push({score: 20, multiplier:1.0, file: 5, rank: 4});
    score_list.push({score: 10, multiplier:1.0, file: 5, rank: 5});
    score_list.push({score: -4, multiplier:1.0, file: 4, rank: 4});
    score_list.push({score: 10, multiplier:1.0, file: 4, rank: 6});
    score_list.push({score: 3, multiplier:1.0, file: 6, rank: 6});
    score_list.push({score: 20, multiplier:0.9, file: 5, rank: 4});
    score_list.push({score: 10, multiplier:0.9, file: 5, rank: 5});
    score_list.push({score: -4, multiplier:0.9, file: 4, rank: 4});
    score_list.push({score: 10, multiplier:0.9, file: 4, rank: 6});
    score_list.push({score: 3, multiplier:0.9, file: 6, rank: 6});
    return score_list;
  }

  private hardCodedPieceList(): any[]
  {
    let piece_list: any = [];

    // Black pawn list 
    piece_list.push({piece: "pawn", color: "white", file: "A", rank: 2});
    piece_list.push({piece: "pawn", color: "white", file: "B", rank: 2});
    piece_list.push({piece: "pawn", color: "white", file: "C", rank: 2});
    piece_list.push({piece: "pawn", color: "white", file: "D", rank: 2});
    piece_list.push({piece: "pawn", color: "white", file: "E", rank: 2});
    piece_list.push({piece: "pawn", color: "white", file: "F", rank: 2});
    piece_list.push({piece: "pawn", color: "white", file: "G", rank: 2});
    piece_list.push({piece: "pawn", color: "white", file: "H", rank: 2});

    // Black piece list
    piece_list.push({piece: "rook",   color: "white", file: "A", rank: 1});
    piece_list.push({piece: "knight", color: "white", file: "B", rank: 1});
    piece_list.push({piece: "bishop", color: "white", file: "C", rank: 1});
    piece_list.push({piece: "queen",  color: "white", file: "D", rank: 1});
    piece_list.push({piece: "king",   color: "white", file: "E", rank: 1});
    piece_list.push({piece: "bishop", color: "white", file: "F", rank: 1});
    piece_list.push({piece: "knight", color: "white", file: "G", rank: 1});
    piece_list.push({piece: "rook",   color: "white", file: "H", rank: 1});

    // Render white pieces
    piece_list.push({piece: "pawn", color: "black", file: "A", rank: 7});
    piece_list.push({piece: "pawn", color: "black", file: "B", rank: 7});
    piece_list.push({piece: "pawn", color: "black", file: "C", rank: 7});
    piece_list.push({piece: "pawn", color: "black", file: "D", rank: 7});
    piece_list.push({piece: "pawn", color: "black", file: "E", rank: 7});
    piece_list.push({piece: "pawn", color: "black", file: "F", rank: 7});
    piece_list.push({piece: "pawn", color: "black", file: "G", rank: 7});
    piece_list.push({piece: "pawn", color: "black", file: "H", rank: 7});

    // Black piece list
    piece_list.push({piece: "rook",   color: "black", file: "A", rank: 8});
    piece_list.push({piece: "knight", color: "black", file: "B", rank: 8});
    piece_list.push({piece: "bishop", color: "black", file: "C", rank: 8});
    piece_list.push({piece: "queen",  color: "black", file: "D", rank: 8});
    piece_list.push({piece: "king",   color: "black", file: "E", rank: 8});
    piece_list.push({piece: "bishop", color: "black", file: "F", rank: 8});
    piece_list.push({piece: "knight", color: "black", file: "G", rank: 8});
    piece_list.push({piece: "rook",   color: "black", file: "H", rank: 8});

    return piece_list;
  }
}
