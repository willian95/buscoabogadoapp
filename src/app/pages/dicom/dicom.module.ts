import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicomPageRoutingModule } from './dicom-routing.module';

import { DicomPage } from './dicom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicomPageRoutingModule
  ],
  declarations: [DicomPage]
})
export class DicomPageModule {}
