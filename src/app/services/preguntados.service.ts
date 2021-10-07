import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../classes/question';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  URL_BASE = 'https://go-preguntados-backend.herokuapp.com/';

  constructor(private httpClient: HttpClient) {
  }

  getQuestionsWithAnswers(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.URL_BASE);
  }
}
