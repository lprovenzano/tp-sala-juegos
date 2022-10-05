import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Survey} from '../../../classes/survey';
import {AuthService} from '../../../services/auth.service';
import {SurveyService} from '../../../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  survey: FormGroup;
  answeredSurvey: any;
  isAnswered = false;

  constructor(private authService: AuthService, private surveyService: SurveyService) {
    this.survey = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
      age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(99)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      country: new FormControl('argentina'),
      animal: new FormControl('', Validators.required),
      holidayPlace: new FormControl('playa', Validators.required),
      acceptTerms: new FormControl(true, Validators.requiredTrue)
    });
  }

  ngOnInit(): void {
    this.isAnswered = false;
  }

  onSubmit() {
    this.answeredSurvey = this.survey.value
    this.answeredSurvey.user = this.authService.getUserId()
    this.surveyService.save(this.answeredSurvey)
    this.isAnswered = true;
  }
}
