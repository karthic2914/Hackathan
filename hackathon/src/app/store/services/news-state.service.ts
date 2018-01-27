import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';
import { IdeaPub } from '../models/news.model.publish';
import { log } from 'util';
import { ApiService } from './api.service';


@Injectable()
export class NewsStateService {

  constructor(private http: Http) { }

  private static apiUrl = '/publish';
  //private baseUrl = 'http://localhost:3000/';


store(publish: IdeaPub) {
  console.log('publish');
  /*this.http.post('http://localhost:3002/blog', publish)
  .map(response => response.json())
  .catch(res => {
      console.log(res.toString);
      return Observable.throw(res.message || 'Server error');
  }); */

  this.http.post('http://localhost:3002/blog', publish).toPromise().then((response: any) => {
    console.log(response);
});
}

getAll() {
  return this.http.get(NewsStateService.apiUrl + 'apiUrl')
        .map(res => res.json())
        .do(data => console.log(data))
        .catch(res => {
          console.error(res.toString());
          return Observable.throw(res.message || 'Server error')
        });
}
// public getBlogs() {
//   return this.http.get(this.baseUrl + 'blogs').toPromise().then((response: any) => {
//     this.store.dispatch({type: 'LOAD_NEWS_DATA', payload: response});
//     console.log(response);
//   });
// }

}
