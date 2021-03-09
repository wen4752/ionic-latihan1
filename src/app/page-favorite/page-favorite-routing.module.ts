import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFavoritePage } from './page-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: PageFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFavoritePageRoutingModule {}
