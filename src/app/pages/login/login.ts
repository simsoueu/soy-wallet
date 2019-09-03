import { Component, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController, IonSlides, AlertController } from "@ionic/angular";

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from "../../providers/user-data";
import { UserOptions } from "../../interfaces/user-options";


@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"]
})

export class LoginPage {

  login: UserOptions = { email: "", password: "" };
  currentUser: UserData;
  submitted = false;
  errorMessage = false;

  constructor(
    public menu: MenuController,
    public dataProvider: ConferenceData,
    public userData: UserData,
    public alertController: AlertController,
    public router: Router
  ) { }

  ionViewWillEnter() {
    this.menu.enable(false); 
    this.dataProvider.load();
  }

 
  ionViewDidLeave() {
    this.menu.enable(true);
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    this.dataProvider.tryToLogin(this.login).subscribe((user: UserData) => {
      this.currentUser = user;
      if (user) {
        if (form.valid) {
          this.userData.login(this.login.email);
          this.router.navigateByUrl("/app/tabs/schedule");
        }
      } else {

        this.presentAlert();
      }
    });
    
  }

  checkForm() {
    if (this.login.email && this.login.password) return true;
    
    return false; 
  }

  onSignup() {
    this.router.navigateByUrl("/signup");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      // subHeader: 'Subtitle',
      message: 'Usuário ou senha incorretos',
      buttons: ['OK']
    });

    await alert.present();
  }
}
