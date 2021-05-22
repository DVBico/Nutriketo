import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnchiladasPage } from './enchiladas.page';

const routes: Routes = [
  {
    path: '',
    component: EnchiladasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnchiladasPageRoutingModule {}
