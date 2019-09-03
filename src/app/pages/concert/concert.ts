import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from "@ionic/angular";
import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { EventModel } from '../../interfaces/event.model';


@Component({
  selector: 'app-page',
  styleUrls: ['./concert.scss'],
  templateUrl: 'concert.html'
})
export class ConcertPage {
  concert: any;
  isFavorite = false;
  defaultHref = '';
  chart = {
    items: []
  };
  tabSelected = 'Festas'
  ALL = 0


  _tabs:any; 
  _parentTabs: any;




  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute
  ) {}
  
  concertClick(item: string) {
    // console.log('Clicked', item);
  }
  
  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.concert.name)) {
      this.userProvider.removeFavorite(this.concert.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.concert.name);
      this.isFavorite = true;
    }
  }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {

      if (
        data &&
        data.concerts &&
        data.concerts[0]
      ) {
        const concertId = this.route.snapshot.paramMap.get('concertId');
        for (const concert of data.concerts) {
          if (concert && concert.id == concertId) {
            this.concert = concert;
            break;
          }  
        }
      }
    });
  }

  updateChart(): number{
    this.ALL = this.checkChart();

    return 0;
  }

  checkChart():number {
    let sum = 0
    let n = 0
    
    for (let ticket of this.concert.tickets) {
    
      if (ticket.numberInChart) {    
        n += ticket.numberInChart;
        sum += ticket.price * n
      }
    }
    
    return sum;
  }

  onCheckout() {
    if (this.ALL == 0) {
      this.presentAlert();
    }
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
    
    let time = 200
    
    let hideFooterTimeout = setTimeout( () => {
      this._tabs = document.querySelector('ion-tab-bar');
      this._parentTabs = this._tabs.parentElement;
    
      if (this._tabs && this._parentTabs) {
        this._parentTabs.removeChild(this._tabs)
      }  
    }, time)
  }

  ionViewDidLeave() {
    this._parentTabs.appendChild(this._tabs)
  }  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      // subHeader: 'Subtitle',
      message: 'Ao menos um ingresso deve ser selecionado',
      buttons: ['OK']
    });

    await alert.present();
  }

  goToPage(address: string) {
    const concertId = this.route.snapshot.paramMap.get('concertId');
    this.router.navigate(['app/tabs/concert', concertId, 'summary'])
  }
}
