import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GambasPageRoutingModule } from './gambas-routing.module';

import { GambasPage } from './gambas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GambasPageRoutingModule
  ],
  declarations: [GambasPage]
})
export class GambasPageModule {}
