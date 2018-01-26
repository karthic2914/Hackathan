import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';

@Injectable()
export class HackerStateService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) { }

  public postAnIdea(value) {
      this.http.post(this.baseUrl + 'hacker/postAnIdea', value).toPromise().then((response: any) => {
        console.log(response);
    });
  }

  public fetchAllIdeas() {
    return this.http.get(this.baseUrl + 'hacker/requestToTeam').toPromise().then((response: any) => {
      this.store.dispatch({type: 'LOAD_IDEA_DATA', payload: response});
      console.log(response);
    });
  }

  public invitationFromTeam() { // set the node url here
      return this.http.get(this.baseUrl + 'hacker/requestToTeam').toPromise().then((response: any) => {
        this.store.dispatch({type: 'LOAD_INVITATION_FROM_TEAM', payload: response});
        console.log(response);
    });
  }

  public fetchHackerDetails() {
    return this.http.get(this.baseUrl + 'hacker/requestToTeam').toPromise().then((response: any) => {
      this.store.dispatch({type: 'LOAD_HACKER_DETAILS', payload: response});
      console.log(response);
    });
  }

  public invitationFromHacker() { // set the node url here
      return this.http.get(this.baseUrl + 'hacker/requestToTeam').toPromise().then((response: any) => {
        this.store.dispatch({type: 'LOAD_INVITATION_FROM_TEAM', payload: response});
        console.log(response);
    });
  }

  public requestHacker(value) { // set the node url here
      this.http.post(this.baseUrl + 'hackers/approval', value).toPromise().then((response: any) => {
        this.store.dispatch({type: 'LOAD_INVITATION_FROM_HACKER', payload: response});
        console.log(response);
    });
  }

  public requestTeam(value) { // set the node url here
      this.http.post(this.baseUrl + 'hackers/approval', value).toPromise().then((response: any) => {
        console.log(response);
    });
  }

  public approvalFromHacker(value) { // set the node url here
      this.http.post(this.baseUrl + 'hackers/approval', value).toPromise().then((response: any) => {
        console.log(response);
    });
  }

  public approvalFromHackerTeam(value) { // set the node url here
      this.http.post(this.baseUrl + 'hackers/approval', value).toPromise().then((response: any) => {
        console.log(response);
    });
  }
}
