import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SignupPage } from "./signup";
import { SignupPageRoutingModule } from "./signup-routing.module";
import { SharedComponentsModule } from "../../components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [SignupPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignUpModule {}
