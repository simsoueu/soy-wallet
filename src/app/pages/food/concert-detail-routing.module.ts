import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from '@angular/router';

import { ConcertDetailPage } from './concert-detail';

const routes: Routes = [
  {
    path: '',
    component: ConcertDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, IonicModule],
  exports: [RouterModule]
})
export class ConcertDetailPageRoutingModule { }
