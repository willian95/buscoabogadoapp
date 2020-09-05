import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicomPage } from './dicom.page';

const routes: Routes = [
  {
    path: '',
    component: DicomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicomPageRoutingModule {}
