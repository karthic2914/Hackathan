import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';
import { Router } from '@angular/router';

@Injectable()
export class NewsStateService {
  constructor(private router: Router,  private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) {}

  public getNews() {
    return this.apiService.get('getblog').then((response: any) => {
      this.store.dispatch({type: 'LOAD_NEWS_DATA', payload: response});
    });
  }

  public getActiveNews() {
    return this.apiService.get('getActiveblog').then((response: any) => {
      this.store.dispatch({type: 'LOAD_NEWS_DATA', payload: response});
    });
  }

  public postNews(value) {
   return this.apiService.post('blog', value).then((response: any) => {
      console.log(response);
      this.store.dispatch({type: 'LOAD_NEWS_DATA', payload: response});
      return response;
    });
  }
}
