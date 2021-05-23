import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCoPage } from './menu-co.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCoPageRoutingModule {}
