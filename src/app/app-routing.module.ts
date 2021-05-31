import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticsComponent } from './statistics/statistics.component';
import { GameSetsComponent } from './game-sets/game-sets.component';
import { PositionAnalysisComponent } from './position-analysis/position-analysis.component';
import { BlunderAnalysisComponent } from './blunder-analysis/blunder-analysis.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  { path: 'game-sets', component: GameSetsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'blunder-analysis', component: BlunderAnalysisComponent },
  { path: 'position-analysis', component: PositionAnalysisComponent },
  { path: '', component: HomeScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
