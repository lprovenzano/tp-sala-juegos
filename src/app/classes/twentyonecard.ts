import {Pokercard} from './pokercard';

export class Twentyonecard extends Pokercard{
  isFlipped = true;
  behindImageUrl = '/assets/images/games/twentyone/flipped-card.png'

  public coverCard(){
    this.isFlipped = false;
  }
}
