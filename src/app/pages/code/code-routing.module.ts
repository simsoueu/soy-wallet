import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodePage } from './code';

const routes: Routes = [
  {
    path: '',
    component: CodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodePageRoutingModule { }
