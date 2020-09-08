import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickTimePageRoutingModule } from './pick-time-routing.module';

import { PickTimePage } from './pick-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickTimePageRoutingModule
  ],
  declarations: [PickTimePage]
})
export class PickTimePageModule {}
