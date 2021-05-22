import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuisoPageRoutingModule } from './guiso-routing.module';

import { GuisoPage } from './guiso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuisoPageRoutingModule
  ],
  declarations: [GuisoPage]
})
export class GuisoPageModule {}
