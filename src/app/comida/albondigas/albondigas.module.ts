import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbondigasPageRoutingModule } from './albondigas-routing.module';

import { AlbondigasPage } from './albondigas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbondigasPageRoutingModule
  ],
  declarations: [AlbondigasPage]
})
export class AlbondigasPageModule {}
