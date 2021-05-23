import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCPage } from './menu-c.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCPageRoutingModule {}
