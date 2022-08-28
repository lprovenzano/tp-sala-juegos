import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ideck} from '../interfaces/ideck';
import {Ipokercard} from '../interfaces/ipokercard';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

  constructor(private http: HttpClient) {

  }

  getDeck(): Observable<Ideck> {
    return this.http.get<Ideck>(this.url) as Observable<Ideck>;
  }

  getCard(deckId: string | undefined): Observable<Ipokercard> {
    return this.http.get<Ipokercard>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`) as Observable<Ipokercard>;
  }
}
