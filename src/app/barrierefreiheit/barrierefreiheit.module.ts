import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarrierefreiheitPageRoutingModule } from './barrierefreiheit-routing.module';

import { BarrierefreiheitPage } from './barrierefreiheit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarrierefreiheitPageRoutingModule
  ],
  declarations: [BarrierefreiheitPage]
})
export class BarrierefreiheitPageModule {}
