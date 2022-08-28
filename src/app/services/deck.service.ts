import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ipokercard} from '../interfaces/ipokercard';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private urlBase = 'https://deckofcardsapi.com/api/deck/new/draw/';
  private deckCards = 52;

  constructor(private http: HttpClient) {
  }

  getCards(deckQuantity: number): Observable<Ipokercard> {
    const cardsQuantity = this.deckCards * deckQuantity;
    return this.http.get<Ipokercard>(this.urlBase + `?deck_count=${deckQuantity}&count=${cardsQuantity}`) as Observable<Ipokercard>;
  }

}
