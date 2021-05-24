import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCoPageRoutingModule } from './menu-co-routing.module';

import { MenuCoPage } from './menu-co.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCoPageRoutingModule
  ],
  declarations: [MenuCoPage]
})
export class MenuCoPageModule {}
