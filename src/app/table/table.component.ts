import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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

  constructor() {
    let piece_load_promises = [];
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


  ngOnInit(): void {
    this.table_context = this.table_canvas.nativeElement.getContext('2d')!;
    this.table_canvas_element = this.table_canvas.nativeElement;

    this.renderChessTable();
  }

  public renderChessTable() {
    // Table info
    let width = this.table_canvas_element.width;
    let height = this.table_canvas_element.height;

    // Additional table info
    let squareWidth = width / 8;
    let squareHeight = height / 8;

    // Draw squares
    for ( let i=0; i<8; i++ ) {
      
      for ( let j=0; j<8; j++ ) {
        let parity = i + j;
        if ( parity % 2 == 0 ) {
          this.table_context.fillStyle = '#d5f7eb';
        } else {
          this.table_context.fillStyle = '#474747';
        }

        this.table_context.fillRect(i * squareHeight, j*squareWidth, squareHeight, squareWidth);
      }
    }
    

    // Draw pieces
    this.table_context.drawImage(this.white_pawn, 0, 0, squareWidth, squareHeight);
  }
}
