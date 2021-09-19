import {Injectable} from '@angular/core';
import {Imessage} from '../interfaces/imessage';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Imessage> | undefined;
  public chats: Imessage[] = [];

  constructor(private angularFirestore: AngularFirestore,
              private authService: AuthService) {
  }

  getMessages(): Observable<Imessage[]> {
    this.itemsCollection = this.angularFirestore.collection<Imessage>('chats', ref => ref
      .orderBy('date', 'desc')
      .limit(10));
    return this.itemsCollection.valueChanges().pipe(
      map((messages: Imessage[]) => {
        this.chats = [];
        for (const message of messages) {
          this.chats.unshift(message);
        }
        return this.chats;
      }));
  }


  sendMessage(text: string): any {
    const message: Imessage = {
      name: this.authService.user.email,
      message: text,
      date: new Date().getTime(),
      dateFormatted: `${new Date(new Date().getTime()).toLocaleDateString('es-AR')} ${new Date(new Date().getTime()).toLocaleTimeString('es-AR')}`,
      uid: this.authService.user.uid
    };
    // @ts-ignore
    return this.itemsCollection.add(message);
  }
}
