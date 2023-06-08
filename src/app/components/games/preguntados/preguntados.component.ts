import {Component, OnInit} from '@angular/core';
import {PreguntadosService} from '../../../services/preguntados.service';
import {Question} from '../../../classes/question';
import {Game} from '../../../classes/game';
import {ScoreService} from '../../../services/score.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  questions = [];
  selectedQuestion: any | undefined;
  userAnswer: boolean | undefined;
  isDisabled = false;
  round = 1;
  points = 0;
  wellAnswers = 0;
  badAnswers = 0;

  constructor(private preguntadosService: PreguntadosService, private scoreService: ScoreService) {

  }

  ngOnInit(): void {
    this.preguntadosService.getTriviaQuestions().subscribe(
      (data: any) => {
        this.questions = data;
        this.getRandomQuestion();
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }

  getRandomQuestion(): any {
    this.selectedQuestion = this.questions[Math.floor(Math.random() * this.questions.length)] as any;
  }

  response(option: boolean): void {
    this.accumStats(option);
    this.isDisabled = true;
    this.userAnswer = option;
    setTimeout(() => this.next(), 2000);
  }

  reset(): void {
    if(this.points > 0){
      this.scoreService.save(this.points, Game.PREGUNTADOS);
    }
    this.points = 0;
    this.round = 1;
    this.wellAnswers = 0;
    this.badAnswers = 0;
    this.next();
  }

  private accumStats(option: boolean): void {
    this.points = option ? this.points + 10 : this.points;
    option ? this.wellAnswers++ : this.badAnswers++;
    this.round++;
  }

  private next(): void {
    this.userAnswer = undefined;
    this.isDisabled = false;
    this.getRandomQuestion();
  }

}
