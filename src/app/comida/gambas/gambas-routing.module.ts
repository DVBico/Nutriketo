import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GambasPage } from './gambas.page';

const routes: Routes = [
  {
    path: '',
    component: GambasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GambasPageRoutingModule {}
