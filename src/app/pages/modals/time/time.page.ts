import { Component, OnInit } from '@angular/core';
import {ModalController } from '@ionic/angular';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss()
  }

}
