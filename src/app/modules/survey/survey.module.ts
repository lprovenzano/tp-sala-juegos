import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import {SurveyComponent} from '../../components/pages/survey/survey.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SurveyService} from '../../services/survey.service';


@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SurveyService]
})
export class SurveyModule { }
