import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HigherorlowerRoutingModule} from './higherorlower-routing.module';
import {HigherorlowerService} from '../../../services/higherorlower.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HigherorlowerRoutingModule
  ],
  providers: [
    HigherorlowerService
  ]
})
export class HigherorlowerModule {
}
