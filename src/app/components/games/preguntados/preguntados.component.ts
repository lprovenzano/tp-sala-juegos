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

  constructor(private preguntadosService: PreguntadosService) {

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

  ngOnInit(): void {
  }

  getRandomQuestion(): any {
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  }

}
