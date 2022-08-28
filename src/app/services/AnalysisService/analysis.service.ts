import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  constructor(
    public httpClient: HttpClient,
    public userService: UserService
  ) { }
  
  public getPosition(): any {
    return this.hardCodedPieceList();
  }

  private hardCodedPieceList()
  {
    let piece_list: any = [];

    
    // White pawn list 
    piece_list.push({piece: "pawn", color: "black", file: "A", rank: 2});
    piece_list.push({piece: "pawn", color: "black", file: "B", rank: 2});
    piece_list.push({piece: "pawn", color: "black", file: "C", rank: 2});
    piece_list.push({piece: "pawn", color: "black", file: "D", rank: 2});
    piece_list.push({piece: "pawn", color: "black", file: "E", rank: 2});
    piece_list.push({piece: "pawn", color: "black", file: "F", rank: 2});
    piece_list.push({piece: "pawn", color: "black", file: "G", rank: 2});
    piece_list.push({piece: "pawn", color: "black", file: "H", rank: 2});

    // White piece list
    piece_list.push({piece: "rook",   color: "black", file: "A", rank: 1});
    piece_list.push({piece: "knight", color: "black", file: "B", rank: 1});
    piece_list.push({piece: "bishop", color: "black", file: "C", rank: 1});
    piece_list.push({piece: "queen",  color: "black", file: "D", rank: 1});
    piece_list.push({piece: "king",   color: "black", file: "E", rank: 1});
    piece_list.push({piece: "bishop", color: "black", file: "F", rank: 1});
    piece_list.push({piece: "knight", color: "black", file: "G", rank: 1});
    piece_list.push({piece: "rook",   color: "black", file: "H", rank: 1});
  }

}
