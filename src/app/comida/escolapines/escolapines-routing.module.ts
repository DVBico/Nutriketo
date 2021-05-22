import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolapinesPage } from './escolapines.page';

const routes: Routes = [
  {
    path: '',
    component: EscolapinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolapinesPageRoutingModule {}
