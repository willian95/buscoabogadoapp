import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawyerContactPage } from './lawyer-contact.page';

const routes: Routes = [
  {
    path: '',
    component: LawyerContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawyerContactPageRoutingModule {}
