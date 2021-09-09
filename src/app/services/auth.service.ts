import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;

@Injectable()
export class AuthService {

  user: User | null | undefined;

  constructor(public angularFireAuth: AngularFireAuth, public  router: Router) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    });
  }

  async login(email: string, password: string): Promise<void> {
    const result = await this.angularFireAuth.signInWithEmailAndPassword(email, password);
    console.log(result);
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  async signUp(email: string, password: string): Promise<any> {
    return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async logout(): Promise<void> {
    await this.angularFireAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(<string> localStorage.getItem('user'));
    return user !== null;
  }
}
