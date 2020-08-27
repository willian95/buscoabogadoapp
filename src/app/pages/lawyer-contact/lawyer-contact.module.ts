import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LawyerContactPageRoutingModule } from './lawyer-contact-routing.module';

import { LawyerContactPage } from './lawyer-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LawyerContactPageRoutingModule
  ],
  declarations: [LawyerContactPage]
})
export class LawyerContactPageModule {}
