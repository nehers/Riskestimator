import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { App1PageRoutingModule } from './app1-routing.module';

import { App1Page } from './app1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    App1PageRoutingModule
  ],
  declarations: [App1Page],
  exports: [App1Page]
})
export class App1PageModule {}
