import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnsweredsourveysRoutingModule} from './answeredsourveys-routing.module';
import {AnsweredsurveysComponent} from '../../components/answeredsurveys/answeredsurveys.component';


@NgModule({
  declarations: [AnsweredsurveysComponent],
  imports: [
    CommonModule,
    AnsweredsourveysRoutingModule
  ]
})
export class AnsweredsourveysModule {
}
