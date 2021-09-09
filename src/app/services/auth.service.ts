import {Injectable} from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import User = firebase.User;
import {first} from 'rxjs/operators';

@Injectable()
export class AuthService {

  public user: User | undefined;

  constructor(public angularFireAuth: AngularFireAuth) {
  }

  async login(email: string, password: string): Promise<any> {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async signin(email: string, password: string): Promise<void> {
    try {
      await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.angularFireAuth.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  // @ts-ignore
  getCurrentUser(): Promise<firebase.User | undefined | null> {
    try {
      return this.angularFireAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.error(error);
    }
  }
}
