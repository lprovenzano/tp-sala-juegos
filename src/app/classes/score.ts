import {Game} from './game';

export class Score {
  uid: string;
  userId: string;
  date: any;
  points: number;
  game: Game

  constructor(uid: string, userId: string, date: any, points: number, game: Game) {
    this.uid = uid;
    this.userId = userId;
    this.date = date;
    this.points = points;
    this.game = game;
  }
}
