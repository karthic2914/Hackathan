import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';

@Injectable()
export class HackerStateService {

  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) { }

  public postAnIdea(value) {
    this.http.post('http://localhost:3000/hacker/postAnIdea', value).subscribe(
      (data: any) =>  {
        console.log(data);
      }
    );
  }

  /* public fetchAllIdeas() {
    this.http.get('http://localhost:3000/hacker/requestToTeam').subscribe(
      (data: any) =>  {
        this.store.dispatch({type: 'LOAD_IDEA_DATA', payload: data});
        console.log(data);
      }
    );
  } */

  public fetchAllIdeas() {
    return this.http.get('http://localhost:3000/hacker/requestToTeam').toPromise().then((response: any) => {
      this.store.dispatch({type: 'LOAD_IDEA_DATA', payload: response});
      console.log(response);
    });
    }

  public invitationFromTeam() { // set the node url here
      return this.http.get('http://localhost:3000//hackers/invitation').toPromise().then((response: any) => {
        console.log(response);
    });
  }

  public invitationFromHacker() { // set the node url here
      return this.http.get('http://localhost:3000//hackers/invitation').toPromise().then((response: any) => {
        console.log(response);
    });
  }

  public searchHackers(value) { // set the node url here
      this.http.post('http://localhost:3000//hackers/approval', value).toPromise().then((response: any) => {
        console.log(response);
    });
  }

  public requestHacker(value) { // set the node url here
      this.http.post('http://localhost:3000//hackers/approval', value).toPromise().then((response: any) => {
        console.log(response);
    });
  }
}
