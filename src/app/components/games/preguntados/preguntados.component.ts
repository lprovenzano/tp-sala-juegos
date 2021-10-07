import {Component, OnInit} from '@angular/core';
import {PreguntadosService} from '../../../services/preguntados.service';
import {Question} from '../../../classes/question';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  questions = [];
  selectedQuestion: Question | undefined;
  userAnswer: boolean | undefined;
  isDisabled = false;
  round = 1;
  points = 0;
  wellAnswers = 0;
  badAnswers = 0;

  constructor(private preguntadosService: PreguntadosService) {
    this.getAllQuestionsAndAnswers();
  }

  ngOnInit(): void {
  }

  getAllQuestionsAndAnswers(): void {
    this.preguntadosService.getQuestionsWithAnswers().toPromise()
      .then(
        (questions: Question[]) => {
          for (const question of questions) {
            const newQuestion = new Question(question.id, question.title, question.options, question.urlImage);
            // @ts-ignore
            this.questions.push(newQuestion);
          }
          this.selectedQuestion = this.getRandomQuestion();
        }
      );
  }

  getRandomQuestion(): any {
    let randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)] as Question;
    if (randomQuestion.title === this.selectedQuestion?.title) {
      randomQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
    }
    return randomQuestion;
  }

  response(option: boolean): void {
    this.accumStats(option);
    this.isDisabled = true;
    this.userAnswer = option;
    setTimeout(() => this.next(), 3500);
  }

  reset(): void {
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
    this.selectedQuestion = this.getRandomQuestion();
  }

}
