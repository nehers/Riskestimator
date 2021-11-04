import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarrierefreiheitPage } from './barrierefreiheit.page';

const routes: Routes = [
  {
    path: '',
    component: BarrierefreiheitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarrierefreiheitPageRoutingModule {}
