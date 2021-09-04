import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { GithubUser } from '../classes/github-user';
import { IGithubUser } from '../interfaces/igithub-user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUser(id : string) : Observable<IGithubUser> {
    const url = `${this.baseUrl}/users/${id}`.toString();
    return this.http.get<IGithubUser>(url);
  }
}
