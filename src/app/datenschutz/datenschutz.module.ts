import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatenschutzPageRoutingModule } from './datenschutz-routing.module';

import { DatenschutzPage } from './datenschutz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatenschutzPageRoutingModule
  ],
  declarations: [DatenschutzPage]
})
export class DatenschutzPageModule {}
