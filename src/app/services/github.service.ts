import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IGithubUser} from '../interfaces/igithub-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  getUser(id: string): Observable<IGithubUser> {
    const url = `${this.baseUrl}/users/${id}`.toString();
    return this.http.get<IGithubUser>(url);
  }
}
