import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ConcertPage } from './concert';
import { ConcertPageRoutingModule } from './concert-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ConcertPageRoutingModule
  ],
  declarations: [
    ConcertPage,
  ]
})
export class ConcertModule { }
