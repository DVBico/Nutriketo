import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LPageRoutingModule } from './l-routing.module';

import { LPage } from './l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LPageRoutingModule
  ],
  declarations: [LPage]
})
export class LPageModule {}
