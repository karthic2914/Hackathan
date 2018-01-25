import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import { IdeaPub } from '../models/news.model.publish';
import { log } from 'util';


@Injectable()
export class NewsStateService {

  constructor(private http: Http) { }

  private static apiUrl = '/publish';


store(publish: IdeaPub) {
  return this.http.post(NewsStateService.apiUrl + 'apiUrl', publish)
  .map(response => response.json())
  .catch(res => {
      console.log(res.toString);
      return Observable.throw(res.message || 'Server error');
  });
}

getAll(){
  return this.http.get(NewsStateService.apiUrl + 'apiUrl')
        .map(res => res.json())
        .do(data => console.log(data))
        .catch(res => {
          console.error(res.toString());
          return Observable.throw(res.message || 'Server error')
        });
}

}
