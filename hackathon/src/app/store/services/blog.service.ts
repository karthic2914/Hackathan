import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';

@Injectable()
export class BlogService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) { }

  public getBlogs() {
    return this.http.get(this.baseUrl + 'blogs').toPromise().then((response: any) => {
      this.store.dispatch({type: 'LOAD_NEWS_DATA', payload: response});
      console.log(response);
    });
  }
}