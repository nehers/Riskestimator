import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatenschutzPage } from './datenschutz.page';

const routes: Routes = [
  {
    path: '',
    component: DatenschutzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatenschutzPageRoutingModule {}
