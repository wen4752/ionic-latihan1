import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'halaman-baru',
    loadChildren: () => import('./halaman-baru/halaman-baru.module').then( m => m.HalamanBaruPageModule)
  },
  {
    path: 'halaman2',
    loadChildren: () => import('./halaman2/halaman2.module').then( m => m.Halaman2PageModule)
  },
  {
    path:'halaman2/:index',
    loadChildren:()=>import('./halaman2/halaman2.module').then( m => m.Halaman2PageModule)
  },
  {
    path: 'page-favorite',
    loadChildren: () => import('./page-favorite/page-favorite.module').then( m => m.PageFavoritePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
