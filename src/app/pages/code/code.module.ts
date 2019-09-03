import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { IonicModule } from '@ionic/angular';

import { CodePage } from './code';
import { CodePageRoutingModule } from './code-routing.module';
import { SharedComponentsModule } from "../../components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodePageRoutingModule,
	SharedComponentsModule,
  ],
  declarations: [
    CodePage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CodeModule { }
