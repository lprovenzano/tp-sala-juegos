import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HigherorlowerRoutingModule} from './higherorlower-routing.module';
import {DeckService} from '../../../services/deck.service';
import {HigherorlowerComponent} from '../../../components/games/higherorlower/higherorlower.component';


@NgModule({
  declarations: [HigherorlowerComponent],
  imports: [
    CommonModule,
    HigherorlowerRoutingModule
  ],
  providers: [
    DeckService
  ]
})
export class HigherorlowerModule {
}
