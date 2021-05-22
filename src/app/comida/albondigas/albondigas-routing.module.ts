import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbondigasPage } from './albondigas.page';

const routes: Routes = [
  {
    path: '',
    component: AlbondigasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbondigasPageRoutingModule {}
