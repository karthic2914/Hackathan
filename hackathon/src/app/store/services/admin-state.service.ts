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

  //Admin >> ideaApproval 
  public getProfileList(value) { // set the node url here
    this.http.post('http://localhost:3000//admin/idealist', value).toPromise().then((response: any) => {
      console.log(response);
    });
  }

  //Admin >> ideaApproval 
  public updateProfileStatus(value) { // set the node url here
    this.http.post('http://localhost:3000//admin/changestatus', value).toPromise().then((response: any) => {
      console.log(response);
    });
  }

  //Admin >> Master logs 
  public masterlogGet(value) { // set the node url here
    this.http.post('http://localhost:3000//admin/getlogs', value).toPromise().then((response: any) => {
      console.log(response);
    });
  }

  //Admin >> Master logs
  public masterlogdelete(value) { // set the node url here
    this.http.post('http://localhost:3000//admin/delete', value).toPromise().then((response: any) => {
      console.log(response);
    });
  }

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

}
