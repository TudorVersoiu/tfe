import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-position-analysis',
  templateUrl: './position-analysis.component.html',
  styleUrls: ['./position-analysis.component.less']
})
export class PositionAnalysisComponent implements OnInit {

  constructor() { }

  @ViewChild('table', {static: true})
  private tableComponent!: TableComponent;

  ngOnInit(): void {
  }

}
