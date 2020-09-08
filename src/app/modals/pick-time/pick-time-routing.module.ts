import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickTimePage } from './pick-time.page';

const routes: Routes = [
  {
    path: '',
    component: PickTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickTimePageRoutingModule {}
