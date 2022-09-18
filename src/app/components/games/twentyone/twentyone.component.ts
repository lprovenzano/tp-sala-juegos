import {Component, OnInit} from '@angular/core';
import {DeckService} from '../../../services/deck.service';
import {Ipokercard} from '../../../interfaces/ipokercard';
import {Twentyonecard} from '../../../classes/twentyonecard';
import {Game} from '../../../classes/game';
import {ScoreService} from '../../../services/score.service';

@Component({
  selector: 'app-twentyone',
  templateUrl: './twentyone.component.html',
  styleUrls: ['./twentyone.component.scss']
})
export class TwentyoneComponent implements OnInit {
  public points = 0;
  public wonHands = 0;
  public lossesHands = 0;
  public avgPoints = 0;
  public beganGame = false;
  public cards: Twentyonecard[] = [];
  public dealerCards: Twentyonecard[] = [];
  public playerCards: Twentyonecard[] = [];
  public playerAccumulation = 0;
  public dealerAccumulation = 0;
  public behindImageUrl = '/assets/images/games/twentyone/flipped-card.png';

  public playerWins = false;
  public dealerWins = false;
  public anyoneWins = false;
  public dealerTurn = false;

  private deckQuantity = 6;
  private numbersCount = new Map();


  constructor(private deckService: DeckService, private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.fillDeck();
    this.numbersCount.set('ACE', 1);
    this.numbersCount.set('ACE-ELEVEN', 11);
    this.numbersCount.set('2', 2);
    this.numbersCount.set('3', 3);
    this.numbersCount.set('4', 4);
    this.numbersCount.set('5', 5);
    this.numbersCount.set('6', 6);
    this.numbersCount.set('7', 7);
    this.numbersCount.set('8', 8);
    this.numbersCount.set('9', 9);
    this.numbersCount.set('10', 10);
    this.numbersCount.set('QUEEN', 10);
    this.numbersCount.set('KING', 10);
    this.numbersCount.set('JACK', 10);

  }

  initGame(): void {
    this.beganGame = true;
    this.dealCardsToEverybody();
  }

  public newCard(isDealer: boolean) {
    this.dealCard(this.cards.pop(), isDealer);
    if (isDealer) {
      this.dealerAccumulation = this.calculateAccumulation(this.dealerCards);
      if (this.dealerAccumulation > 21) {
        this.playerWins = true;
      }
    } else {
      this.playerAccumulation = this.calculateAccumulation(this.playerCards);
      if (this.playerAccumulation > 21) {
        this.dealerWins = true;
      }
    }
    this.resolvePoints();
  }

  public stop(isDealer: boolean) {
    const isDealerTurn = !isDealer;
    if (isDealerTurn) {
      this.dealerTurn = isDealerTurn;
      while (this.dealerAccumulation < 16) {
        this.newCard(isDealerTurn);
        this.calculateAccumulation(this.dealerCards);
      }
      this.plant();
      this.resolvePoints();
    }
  }

  public reset() {
    this.playerAccumulation = 0;
    this.dealerAccumulation = 0;
    this.dealerCards = [];
    this.playerCards = [];
    this.playerWins = false;
    this.dealerWins = false;
    this.anyoneWins = false;
    this.dealCardsToEverybody();
  }

  public leaveTable(){
    if (this.avgPoints > 0) {
      this.scoreService.save(this.avgPoints, Game.TWENTY_ONE);
    }
  }

  private dealCardsToEverybody() {
    this.dealCard(this.cards.pop(), false);
    this.dealCard(this.cards.pop(), false);
    this.dealCard(this.cards.pop(), true);
    this.playerAccumulation = this.calculateAccumulation(this.playerCards);
    this.dealerAccumulation = this.calculateAccumulation(this.dealerCards);
  }

  private dealCard(card: Twentyonecard | undefined, isDealer: boolean) {
    if (!card) {
      return;
    }
    if (isDealer) {
      if (this.dealerCards.length != 0) {
        card.coverCard();
      }
      this.dealerCards.push(card);
      return;
    }
    this.playerCards.push(card);
  }

  private fillDeck() {
    this.deckService.getCards(this.deckQuantity).toPromise()
      .then((c: Ipokercard) => {
        // tslint:disable-next-line:no-shadowed-variable
        for (const {index, value} of c.cards.map((value, index) => ({index, value}))) {
          const twentyoneCard = new Twentyonecard();
          // @ts-ignore
          twentyoneCard.imageUrl = c.cards[index].image;
          // @ts-ignore
          twentyoneCard.value = c.cards[index].value;
          this.cards?.push(twentyoneCard);
        }
      }).catch(error => console.error(error));
  }

  private calculateAccumulation(cards: Twentyonecard[]): number {
    return <number> cards.map(c => this.numbersCount.get(c.value)).reduce((a, b) => a + b);
  }

  private plant() {
    if (this.dealerAccumulation > 21) {
      this.playerWins = true;
      return;
    }
    if (this.playerAccumulation > 21) {
      this.dealerWins = true;
      return;
    }
    if (this.dealerAccumulation > this.playerAccumulation) {
      this.dealerWins = true;
    } else if (this.playerAccumulation > this.dealerAccumulation) {
      this.playerWins = true;
    } else {
      this.anyoneWins = true;
    }
    return;
  }

  private resolvePoints() {
    if (this.playerWins) {
      this.wonHands += 1;
    }
    if (this.dealerWins) {
      this.lossesHands += 1;
    }
    this.avgPoints = (((this.wonHands + this.lossesHands)) / 2);
  }
}
