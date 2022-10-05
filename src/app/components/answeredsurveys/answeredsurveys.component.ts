import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../../services/survey.service';
import {Survey} from '../../classes/survey';
import {formatDate, registerLocaleData} from '@angular/common';
import esAr from '@angular/common/locales/es-AR';

@Component({
  selector: 'app-answeredsurveys',
  templateUrl: './answeredsurveys.component.html',
  styleUrls: ['./answeredsurveys.component.scss']
})
export class AnsweredsurveysComponent implements OnInit {
  isLoading = true;
  surveys = new Array<Survey>();


  constructor(private surveyService: SurveyService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      registerLocaleData(esAr, 'es-Ar');
      this.surveyService.surveys.map(x => this.surveys.push(new Survey(x.name, x.lastName, x.age, x.phoneNumber, x.country, x.animal, x.holidayPlace, x.acceptTerms, x.user, x.date)));
      this.isLoading = false;
    }, 1500);
  }

  parseDate(date: Date) {
    return formatDate(date, 'yyyy/MM/dd', 'es-Ar');
  }

  ngOnDestroy() {
    this.isLoading = true;
  }

}
