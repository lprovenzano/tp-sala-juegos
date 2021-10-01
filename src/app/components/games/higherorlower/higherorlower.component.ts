import {Component, OnInit} from '@angular/core';
import {HigherorlowerService} from '../../../services/higherorlower.service';
import {Ideck} from '../../../interfaces/ideck';
import {Deck} from '../../../classes/deck';
import {Ipokercard} from '../../../interfaces/ipokercard';
import {Pokercard} from '../../../classes/pokercard';
import {CardChoice} from '../../../classes/cardchoice';

@Component({
  selector: 'app-higherorlower',
  templateUrl: './higherorlower.component.html',
  styleUrls: ['./higherorlower.component.scss']
})
export class HigherorlowerComponent implements OnInit {

  private deck = new Deck();
  public card: Pokercard | undefined;
  public points = 0;
  public isBegin = true;
  public cards: Pokercard[] = [];
  public totalCards = 52;
  public guessedCard = false;
  public notGuessedCard = false;
  public finished = false;
  public showButtonsGame = false;

  constructor(private higherOrLowerService: HigherorlowerService) {

  }

  ngOnInit(): void {
    this.higherOrLowerService.getDeck().toPromise()
      .then((d: Ideck) => {
        this.deck.deckId = d.deck_id;
        this.deck.remaining = d.remaining;
        this.deck.shuffled = d.shuffled;
        this.deck.success = d.success;
        this.higherOrLowerService.getCard(this.deck.deckId).toPromise()
          .then((c: Ipokercard) => {
            // tslint:disable-next-line:no-shadowed-variable
            for (const {index, value} of c.cards.map((value, index) => ({index, value}))) {
              const pokerCard = new Pokercard();
              // @ts-ignore
              pokerCard.imageUrl = c.cards[index].image;
              // @ts-ignore
              pokerCard.value = c.cards[index].value;
              this.cards.push(pokerCard);
            }
          }).catch(error => console.error(error));
      }).catch(error => console.error(error));
    console.log('begin', this.cards);
  }

  initGame(): void {
    this.showButtonsGame = true;
    this.isBegin = false;
    this.totalCards--;
    this.card = this.cards.pop();
  }

  guess(choice: CardChoice): void {
    this.totalCards--;
    const card = this.cards.shift();
    let guess = false;
    // @ts-ignore
    if (card.value > this.card?.value && CardChoice.HIGHER === choice) {
      guess = true;
    }
    // @ts-ignore
    if (card.value < this.card?.value && CardChoice.LOWER === choice) {
      guess = true;
    }
    this.guessedCard = guess;
    this.notGuessedCard = !guess;
    this.points += this.guessedCard ? 3 : 0;
    this.card = card;
    if (card instanceof Pokercard) {
      console.log('sent to deck> ', card);
      this.cards.push(card);
    }
    if (this.totalCards === 0) {
      this.finished = true;
      this.showButtonsGame = false;
    }
  }

  reset(): void {
    this.points = 0;
    this.totalCards = 52;
    this.guessedCard = false;
    this.notGuessedCard = false;
    this.finished = false;
    this.showButtonsGame = true;
    this.shuffle();
    console.log('shuffle', this.cards);
  }

  // tslint:disable-next-line:typedef
  shuffle() {
    // tslint:disable-next-line:one-variable-per-declaration
    let currentIndex = this.cards.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
    return this.cards;
  }

}
