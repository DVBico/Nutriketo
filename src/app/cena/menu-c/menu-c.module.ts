import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCPageRoutingModule } from './menu-c-routing.module';

import { MenuCPage } from './menu-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCPageRoutingModule
  ],
  declarations: [MenuCPage]
})
export class MenuCPageModule {}
