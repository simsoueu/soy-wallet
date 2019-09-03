import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, IonSlides } from "@ionic/angular";

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
  styleUrls: ['./code.scss'],
})
export class CodePage {
  
  digits = {
    first: '', second: '', third:'', fourth: '', fifth:''
  };

  speaker: any;

  constructor(
    private dataProvider: ConferenceData,
    public menu: MenuController,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ionViewDidLeave() {
    this.menu.enable(true);
  }

  ionViewWillEnter() {
    this.menu.enable(false);
    // this.dataProvider.load().subscribe((data: any) => {
    //   const speakerId = this.route.snapshot.paramMap.get('speakerId');
    //   if (data && data.speakers) {
    //     for (const speaker of data.speakers) {
    //       if (speaker && speaker.id === speakerId) {
    //         this.speaker = speaker;
    //         break;
    //       }
    //     }
    //   }
    // });
  }

  checkCode(): boolean {

    for (var prop in this.digits) {
      if (this.digits.hasOwnProperty(prop)) {
        if (!this.digits[prop]) {
          return false;
        }
      }
    }

    return true;
  }

  onLogin() {
    this.router.navigateByUrl("/app/tabs/schedule");
  }
}
