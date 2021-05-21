import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch:'full'
  },

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu-d',
    loadChildren: () => import('./Desayuno/menu-d/menu-d.module').then( m => m.MenuDPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },  {
    path: 'menu-s',
    loadChildren: () => import('./Snacks/menu-s/menu-s.module').then( m => m.MenuSPageModule)
  },
  {
    path: 'omeletkq',
    loadChildren: () => import('./Desayuno/omeletkq/omeletkq.module').then( m => m.OmeletkqPageModule)
  },
  {
    path: 'pannacotta',
    loadChildren: () => import('./Snacks/pannacotta/pannacotta.module').then( m => m.PannacottaPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
