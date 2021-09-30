import {Injectable} from '@angular/core';
import {Ideck} from '../interfaces/ideck';
import {IGithubUser} from '../interfaces/igithub-user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HigherorlowerService {

  private url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  deck: Ideck | undefined;

  constructor(private http: HttpClient) {
  }

  getDeck(): Observable<Ideck> {
    return this.http.get<Ideck>(this.url)
      .map((response: Ideck) => response.data as Ideck);
  }
}
