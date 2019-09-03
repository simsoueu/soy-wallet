import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { SchedulePage } from './schedule';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, IonicModule],
  exports: [RouterModule]
})
export class SchedulePageRoutingModule { }
