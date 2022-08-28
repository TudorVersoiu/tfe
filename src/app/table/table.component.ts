import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game as ModelGame } from 'src/app/Model/Game';
import { AnalysisService } from '../services/AnalysisService/analysis.service';

// Component which will render a chess table
// It will also render "analytics" through the provided best lines
// + Scroll through moves
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  // TODO: use an input property later on
  // Unused
  @Input("table_size")  table_size: number | undefined;

  // Rendering stuff -> canvas and helpers
  @ViewChild('table_canvas', {static: true}) table_canvas!: ElementRef<HTMLCanvasElement>;
  table_canvas_element!: HTMLCanvasElement;
  table_context!: CanvasRenderingContext2D;

  // Chess table
  public squares: string[][] = [];

  public white_pawn: HTMLImageElement = new Image();
  public white_king: HTMLImageElement = new Image();
  public white_queen: HTMLImageElement = new Image();
  public white_bishop: HTMLImageElement = new Image();
  public white_knight: HTMLImageElement = new Image();
  public white_rook: HTMLImageElement = new Image();

  public black_pawn: HTMLImageElement = new Image();
  public black_king: HTMLImageElement = new Image();
  public black_queen: HTMLImageElement = new Image();
  public black_bishop: HTMLImageElement = new Image();
  public black_knight: HTMLImageElement = new Image();
  public black_rook: HTMLImageElement = new Image();

  constructor(
    public gameService: GameService,
    public analysisService: AnalysisService
  ) {
    let piece_load_promises = [];
    this.piece_list = [];
    // Load white pieces
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.white_pawn.onload = () => resolve(0);
      this.white_pawn.src = '/assets/pieces/white_pawn.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.white_queen.onload = () => resolve(0);
      this.white_queen.src = '/assets/pieces/white_queen.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.white_bishop.onload = () => resolve(0);
      this.white_bishop.src = '/assets/pieces/white_bishop.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.white_knight.onload = () => resolve(0);
      this.white_knight.src = '/assets/pieces/white_knight.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.white_rook.onload = () => resolve(0);
      this.white_rook.src = '/assets/pieces/white_rook.svg';
    }));


    // Load black pieces
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.black_pawn.onload = () => resolve(0);
      this.black_pawn.src = '/assets/pieces/black_pawn.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.black_king.onload = () => resolve(0);
      this.black_king.src = '/assets/pieces/black_king.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.black_queen.onload = () => resolve(0);
      this.black_queen.src = '/assets/pieces/black_queen.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.black_bishop.onload = () => resolve(0);
      this.black_bishop.src = '/assets/pieces/black_bishop.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.black_knight.onload = () => resolve(0);
      this.black_knight.src = '/assets/pieces/black_knight.svg';
    }));
    piece_load_promises.push( new Promise( (resolve, reject) => {
      this.black_rook.onload = () => resolve(0);
      this.black_rook.src = '/assets/pieces/black_rook.svg';
    }));

    // One promise which will fire once ALL assets are loaded for the table
    Promise.all(piece_load_promises).then( () => {
      this.renderChessTable();
    });
  }


  private piecePositions!: string[][];
  private chessGame: ModelGame | undefined;

  private piece_list: any[];

  async ngOnInit() {
    this.table_context = this.table_canvas.nativeElement.getContext('2d')!;
    this.table_canvas_element = this.table_canvas.nativeElement;

    this.chessGame = await this.gameService.getGame("629e5973ba381f32186ec5f8");
    this.piece_list = this.analysisService.getPosition();

    this.renderChessTable();
  }

  private squareWidth: number = 0;
  private squareHeight: number = 0;

  private renderWhitePawn(iPos: number, jPos: number) {
    this.table_context.drawImage(this.white_pawn, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderWhiteRook(iPos: number, jPos: number) {
    this.table_context.drawImage(this.white_rook, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderWhiteKnight(iPos: number, jPos: number) {
    this.table_context.drawImage(this.white_knight, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderWhiteBishop(iPos: number, jPos: number) {
    this.table_context.drawImage(this.white_bishop, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderWhiteKing(iPos: number, jPos: number) {
    this.table_context.drawImage(this.white_king, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderWhiteQueen(iPos: number, jPos: number) {
    this.table_context.drawImage(this.white_queen, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderBlackPawn(iPos: number, jPos: number) {
    this.table_context.drawImage(this.black_pawn, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderBlackRook(iPos: number, jPos: number) {
    this.table_context.drawImage(this.black_rook, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderBlackKnight(iPos: number, jPos: number) {
    this.table_context.drawImage(this.black_knight, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderBlackBishop(iPos: number, jPos: number) {
    this.table_context.drawImage(this.black_bishop, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderBlackKing(iPos: number, jPos: number) {
    this.table_context.drawImage(this.black_king, iPos, jPos, this.squareWidth, this.squareHeight);
  }
  private renderBlackQueen(iPos: number, jPos: number) {
    this.table_context.drawImage(this.black_queen, iPos, jPos, this.squareWidth, this.squareHeight);
  }

  public renderChessTable() {
    // Draw pieces
    this.renderTableBackground();
    // this.renderPieces();
  }

  private renderTableBackground()
  {
    // Table info
    let width = this.table_canvas_element.width;
    let height = this.table_canvas_element.height;

    // Additional table info
    this.squareWidth = width / 8;
    this.squareHeight = height / 8;

    // Draw squares
    for ( let i=0; i<8; i++ ) {
      
      for ( let j=0; j<8; j++ ) {
        let parity = i + j;
        if ( parity % 2 == 0 ) {
          this.table_context.fillStyle = '#d5f7eb';
        } else {
          this.table_context.fillStyle = '#474747';
        }

        this.table_context.fillRect(i * this.squareHeight, j*this.squareWidth, this.squareHeight, this.squareWidth);
      }
    }
  }

  private renderPieces(pieceArray: any)
  {
    for ( let square of this.piece_list)
    {
      let i = 'a'.charCodeAt(0) - square.file.charCodeAt(0);
      let j = square.rank;
      j *= this.squareHeight; i*=this.squareWidth;
      let piece_type = square.piece.type;

      if ( square.piece.side.name === "white" ) {
        if ( piece_type === 'pawn' )
          this.renderWhitePawn(i, j);
        if ( piece_type === 'rook' )
          this.renderWhiteRook(i, j);
        if ( piece_type === 'bishop' )
          this.renderWhiteBishop(i, j);
        if ( piece_type === 'knight' )
          this.renderWhiteKnight(i, j);
        if ( piece_type === 'king' )
          this.renderWhiteKing(i, j);
        if ( piece_type === 'queen' )
          this.renderWhiteQueen(i, j);
      } else {
        if ( piece_type === 'pawn' )
          this.renderBlackPawn(i, j);
        if ( piece_type === 'rook' )
          this.renderBlackRook(i, j);
        if ( piece_type === 'bishop' )
          this.renderBlackBishop(i, j);
        if ( piece_type === 'knight' )
          this.renderBlackKnight(i, j);
        if ( piece_type === 'king' )
          this.renderBlackKing(i, j);
        if ( piece_type === 'queen' )
          this.renderBlackQueen(i, j);
      }
    }
  }
}