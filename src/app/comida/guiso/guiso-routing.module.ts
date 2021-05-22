import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuisoPage } from './guiso.page';

const routes: Routes = [
  {
    path: '',
    component: GuisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuisoPageRoutingModule {}
