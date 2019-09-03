import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { AppHeaderComponent } from "./app-header/app-header.component";
import { HeaderLogoComponent } from "./header-logo/header-logo.component";

@NgModule({
  imports: [CommonModule, IonicModule.forRoot()],
  declarations: [AppHeaderComponent, HeaderLogoComponent],
  exports: [AppHeaderComponent, HeaderLogoComponent]
})
export class SharedComponentsModule {}
