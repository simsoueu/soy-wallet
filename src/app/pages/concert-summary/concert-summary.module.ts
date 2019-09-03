import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ConcertSummaryPage } from './concert-summary';
import { ConcertSummaryRoutingModule } from './concert-summary-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ConcertSummaryRoutingModule
  ],
  declarations: [
    ConcertSummaryPage,
  ]
})
export class ConcertSummaryModule { }
