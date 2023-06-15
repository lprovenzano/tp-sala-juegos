import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = 'https://api.unsplash.com/search/photos?client_id=3sv86S7hT-tLSWvwjGlVWqpbVDnvPTPj3RN-nbW-QQo&page=1&query='

  constructor(private http: HttpClient) {
  }

  getPhotoByTopic(value: string): Observable<any> {
    return this.http.get<any>(this.url + value);
  }
}
