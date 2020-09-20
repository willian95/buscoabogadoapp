import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { AlertController, ModalController } from '@ionic/angular';
import {TimePage} from '../modals/time/time.page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  date: string;
  type: 'js-date';
  optionsBasic: CalendarComponentOptions = {
    pickMode: 'single',
    monthPickerFormat:[
      'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'
    ],
    weekdays:[
      'D', 'L', 'M', 'X', 'J', 'V', 'S'
    ]
  };

  constructor(public alertController: AlertController, public modalController:ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TimePage,
      componentProps: {
        'date': this.date
      }
    });
    return await modal.present();
  }

  onChange($event) {
    this.date = $event.format('DD-MM-YYYY');
    this.presentModal()

  }

}
