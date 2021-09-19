import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from '../../components/pages/home/home.component';
import {GamecardComponent} from '../../components/games/gamecard/gamecard.component';


@NgModule({
  declarations: [
    HomeComponent,
    GamecardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
