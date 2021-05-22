import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolapinesPageRoutingModule } from './escolapines-routing.module';

import { EscolapinesPage } from './escolapines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolapinesPageRoutingModule
  ],
  declarations: [EscolapinesPage]
})
export class EscolapinesPageModule {}
