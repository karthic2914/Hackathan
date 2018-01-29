import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';
import { Observable } from 'rxjs/Observable';
import { promise } from 'selenium-webdriver';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminStateService {

  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) { }

  // Get idea details from page
  public loadLogs(value) {
    this.http.post('http://localhost:3000//admin/delete', value).toPromise().then((response: any) => {
      this.store.dispatch({ type: 'LOAD_LOGS_DATA', payload: response });
      console.log(response);
    });
  }

  public updateAnIdea(value) {
    this.apiService.post('idea/update', value).then((response: any) => {
      console.log(response);
    });
  }

  public deleteAnIdea(value) {
    this.apiService.post('idea/deleteidea', value).then((response: any) => {
      console.log(response);
    });
  }

  public updateNews(value) {
    this.apiService.post('updateblog', value).then((response: any) => {
      console.log(response);
      this.store.dispatch({type: 'LOAD_NEWS_DATA', payload: response});
    });
  }

}
