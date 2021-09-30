import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HangedRoutingModule} from './hanged-routing.module';
import {HangedService} from '../../../services/hanged.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HangedRoutingModule
  ],
  providers: [
    HangedService
  ]
})
export class HangedModule {
}
