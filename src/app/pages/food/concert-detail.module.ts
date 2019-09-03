import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ConcertDetailPage } from './concert-detail';
import { ConcertDetailPageRoutingModule } from './concert-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ConcertDetailPageRoutingModule
  ],
  declarations: [
    ConcertDetailPage,
  ]
})
export class ConcertDetailModule { }
