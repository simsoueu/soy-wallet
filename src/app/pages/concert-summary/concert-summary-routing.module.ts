import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from '@angular/router';

import { ConcertSummaryPage } from './concert-summary';

const routes: Routes = [
  {
    path: '',
    component: ConcertSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, IonicModule],
  exports: [RouterModule]
})
export class ConcertSummaryRoutingModule { }
