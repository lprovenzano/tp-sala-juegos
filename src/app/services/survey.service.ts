import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {Survey} from '../classes/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  public surveys: any[] = [];
  private SCORE_COLLECTION: string = 'surveys';

  constructor(private angularFirestore: AngularFirestore,
              private authService: AuthService) {
    this.getAllSurveys();
  }

  getAllSurveys(): void {
    this.surveys = [];
    this.angularFirestore.collection<Survey>
    (this.SCORE_COLLECTION, ref => ref
      .orderBy('date', 'desc')
    ).valueChanges().subscribe(ss => {
      ss.map(x => this.surveys.push(x));
    });
  }

  save(survey: Survey): any {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection(this.SCORE_COLLECTION)
        .add(JSON.parse(JSON.stringify(survey)))
        .then(res => {
        }, err => reject(err));
    });
  }
}
