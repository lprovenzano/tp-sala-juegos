import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class AuthService {

  public user: any = {};

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
    try {
      return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
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
    const user = JSON.parse(localStorage.getItem('user') as string);
    return user !== null;
  }

  getUserId(): string {
    return JSON.parse(localStorage.getItem('user') as string).email;
  }

  isAdmin(): boolean {
    return this.isLoggedIn() && this.getUserId() === 'admin@admin.com';
  }
}
