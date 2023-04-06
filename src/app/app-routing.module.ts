import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'app1',
    loadChildren: () => import('./app1/app1.module').then( m => m.App1PageModule)
  },  {
    path: 'impressum',
    loadChildren: () => import('./impressum/impressum.module').then( m => m.ImpressumPageModule)
  },
  {
    path: 'datenschutz',
    loadChildren: () => import('./datenschutz/datenschutz.module').then( m => m.DatenschutzPageModule)
  },
  {
    path: 'barrierefreiheit',
    loadChildren: () => import('./barrierefreiheit/barrierefreiheit.module').then( m => m.BarrierefreiheitPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
