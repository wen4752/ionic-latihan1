import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFavoritePageRoutingModule } from './page-favorite-routing.module';

import { PageFavoritePage } from './page-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFavoritePageRoutingModule
  ],
  declarations: [PageFavoritePage]
})
export class PageFavoritePageModule {}
