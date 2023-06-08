import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../classes/question';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  private apiUrl = 'https://the-trivia-api.com/v2/questions';

  constructor(private http: HttpClient) {
  }

  getTriviaQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
