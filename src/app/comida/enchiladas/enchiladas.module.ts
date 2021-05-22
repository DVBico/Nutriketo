import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnchiladasPageRoutingModule } from './enchiladas-routing.module';

import { EnchiladasPage } from './enchiladas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnchiladasPageRoutingModule
  ],
  declarations: [EnchiladasPage]
})
export class EnchiladasPageModule {}
