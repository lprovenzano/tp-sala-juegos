import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Score} from '../classes/score';
import {AuthService} from './auth.service';
import {Game} from '../classes/game';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public scores: any[] = [];
  private SCORE_COLLECTION: string = 'userScores';

  constructor(private angularFirestore: AngularFirestore,
              private authService: AuthService) {
    this.getAllScores();
  }

  getScoreByUserId(): number {
    return this.scores
      .filter(x => x.uid === this.authService.user.uid)
      .map(x => x.points)
      .reduce<number>((accumulator, current) => {
        return accumulator + current;
      }, 0);
  }

  getAllScores(): void {
    this.scores = [];
    this.angularFirestore.collection<Score>
    (this.SCORE_COLLECTION, ref => ref
      .orderBy('date', 'desc')
    ).valueChanges().subscribe(ss => {
      ss.map(x => this.scores.push(x));
    });
  }

  save(points: number, game: Game): any {
    const score = new Score(this.authService.user.uid, this.authService.user.email, new Date(new Date().getTime()).toLocaleDateString('es-AR'), points, game);
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection(this.SCORE_COLLECTION)
        .add(JSON.parse(JSON.stringify(score)))
        .then(res => {
        }, err => reject(err));
    });
  }
}
