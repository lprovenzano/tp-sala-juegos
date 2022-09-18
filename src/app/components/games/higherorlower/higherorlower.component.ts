import {Component, OnInit} from '@angular/core';
import {DeckService} from '../../../services/deck.service';
import {Ipokercard} from '../../../interfaces/ipokercard';
import {Pokercard} from '../../../classes/pokercard';
import {CardChoice} from '../../../classes/cardchoice';
import {ScoreService} from '../../../services/score.service';
import {Game} from '../../../classes/game';

@Component({
  selector: 'app-higherorlower',
  templateUrl: './higherorlower.component.html',
  styleUrls: ['./higherorlower.component.scss']
})
export class HigherorlowerComponent implements OnInit {
  public card: Pokercard | undefined;
  public points = 0;
  public isBegin = true;
  public cards: Pokercard[] = [];
  public totalCards = 52;
  public guessedCard = false;
  public notGuessedCard = false;
  public finished = false;
  public showButtonsGame = false;
  private deckQuantity = 1;

  constructor(private deckService: DeckService, private scoreService: ScoreService) {

  }

  ngOnInit(): void {
        this.deckService.getCards(this.deckQuantity).toPromise()
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
      this.cards.push(card);
    }
    if (this.totalCards === 0) {
      this.finished = true;
      this.showButtonsGame = false;
      if(this.points > 0){
        this.scoreService.save(this.points, Game.HIGHER_OR_LOWER);
      }
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
  }

  // tslint:disable-next-line:typedef
  shuffle() {
    // tslint:disable-next-line:one-variable-per-declaration
    let currentIndex = this.cards.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
    return this.cards;
  }

}
