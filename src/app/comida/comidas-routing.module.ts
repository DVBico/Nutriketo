import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidasPage } from './comidas.page';

const routes: Routes = [
  {
    path: '',
    component: ComidasPage
  },
  {
    path: 'albondigas',
    loadChildren: () => import('./albondigas/albondigas.module').then( m => m.AlbondigasPageModule)
  },
  {
    path: 'enchiladas',
    loadChildren: () => import('./enchiladas/enchiladas.module').then( m => m.EnchiladasPageModule)
  },
  {
    path: 'escolapines',
    loadChildren: () => import('./escolapines/escolapines.module').then( m => m.EscolapinesPageModule)
  },
  {
    path: 'gambas',
    loadChildren: () => import('./gambas/gambas.module').then( m => m.GambasPageModule)
  },
  {
    path: 'guiso',
    loadChildren: () => import('./guiso/guiso.module').then( m => m.GuisoPageModule)
  },
  {
    path: 'hamburguesa',
    loadChildren: () => import('./hamburguesa/hamburguesa.module').then( m => m.HamburguesaPageModule)
  },
  {
    path: 'lasana',
    loadChildren: () => import('./lasana/lasana.module').then( m => m.LasanaPageModule)
  },
  {
    path: 'pollo',
    loadChildren: () => import('./pollo/pollo.module').then( m => m.PolloPageModule)
  },
  {
    path: 'pollofrito',
    loadChildren: () => import('./pollofrito/pollofrito.module').then( m => m.PollofritoPageModule)
  },
  {
    path: 'sopa',
    loadChildren: () => import('./sopa/sopa.module').then( m => m.SopaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidasPageRoutingModule {}
