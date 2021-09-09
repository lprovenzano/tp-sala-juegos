import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;

@Injectable()
export class AuthService {

  user: User | null | undefined;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    });
  }

  async login(email: string, password: string): Promise<any> {
    return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  async signUp(email: string, password: string): Promise<any> {
    return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async logout(): Promise<boolean> {
    try {
      await this.angularFireAuth.signOut();
      localStorage.removeItem('user');
      return true;
    } catch (error) {
      console.error('Something went wrong in logout()');
    }
    return false;
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(<string> localStorage.getItem('user'));
    return user !== null;
  }
}
