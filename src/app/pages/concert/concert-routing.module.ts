import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from '@angular/router';

import { ConcertPage } from './concert';

const routes: Routes = [
  {
    path: '',
    component: ConcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, IonicModule],
  exports: [RouterModule]
})
export class ConcertPageRoutingModule { }
