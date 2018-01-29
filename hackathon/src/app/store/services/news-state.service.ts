import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';

@Injectable()
export class NewsStateService {
  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) {}

  public getNews() {
    return this.apiService.get('getblog').then((response: any) => {
      this.store.dispatch({type: 'LOAD_NEWS_DATA', payload: response});
    });
  }


  public postNews(value) {
    this.apiService.post('blog', value).then((response: any) => {
      console.log(response);
    });
  }

  // getAll() {
  //   return this.http
  //     .get(NewsStateService.apiUrl + 'apiUrl')
  //     .map(res => res.json())
  //     .do(data => console.log(data))
  //     .catch(res => {
  //       console.error(res.toString());
  //       return Observable.throw(res.message || 'Server error');
  //     });
  // }
}
