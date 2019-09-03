import { Component, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController, IonSlides } from "@ionic/angular";

import { UserData } from "../../providers/user-data";
// import { UserOptions } from "../../interfaces/user-options";
import { UserModel } from "../../interfaces/user";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
  styleUrls: ["./signup.scss"]
})
export class SignupPage {
  user: UserModel = {
    email: "",
  username: "",
  fullname: "",
  password: "",
  phone: "",
  isStaff: false,
  isClient: true,
  moneyAvailable: 0,
  moneySpent: 0,
  historic: [],
  chat: [],


  };

  credentials = {
    client: '',
    staff: '' 
  }
  
  submitted = false;

  constructor(
    public menu: MenuController,
    public router: Router,
    public userData: UserData) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.user.email);
      this.router.navigateByUrl("/code");
    }
  }

  checkForm() {

    let list = ['name', 'email', 'password', 'phone']

    for (var prop in list) {
      let v = list[prop]
       if (!this.user[v]) {
         return false;
       }
    }

    return true;
  }
}
