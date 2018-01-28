import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';

@Injectable()
export class HackerStateService {

  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) { }

  public postAnIdea(value) {
      this.apiService.post('idea/save', value).then((response: any) => {
        console.log(response);
    });
  }

  public updateAnIdea(value) {
    this.apiService.post('idea/update', value).then((response: any) => {
      console.log(response);
  });
}

  public fetchAllIdeas() {
    return this.apiService.get('idea').then((response: any) => {
      this.store.dispatch({type: 'LOAD_IDEA_DATA', payload: response});
      console.log(response);
    });
  }

  public fetchHackerIdeas() {
    return this.apiService.get('idea/myideas').then((response: any) => {
      this.store.dispatch({type: 'LOAD_HACKER_IDEA_DATA', payload: {hackerIdea: response}});
      console.log(response);
    });
  }

  public invitationFromTeam() {
      return this.apiService.get('hacker/listhackerrequest').then((response: any) => {
        this.store.dispatch({type: 'LOAD_INVITATION_FROM_TEAM', payload: {invitationFromTeam: response.data.ideas}});
        console.log(response);
    });
  }

  public fetchHackerDetails() {
    return this.apiService.get('hacker/requestToTeam').then((response: any) => {
      this.store.dispatch({type: 'LOAD_HACKER_DETAILS', payload: response});
      console.log(response);
    });
  }

  public invitationFromHacker() { // set the node url here
      return this.apiService.get('hacker/requestToTeam').then((response: any) => {
        this.store.dispatch({type: 'LOAD_INVITATION_FROM_TEAM', payload: response});
        console.log(response);
    });
  }

  public requestHacker(value) { // set the node url here
      this.apiService.post('hackers/approval', value).then((response: any) => {
        this.store.dispatch({type: 'LOAD_INVITATION_FROM_HACKER', payload: response});
        console.log(response);
    });
  }

  public requestTeam(value) { // set the node url here
      this.apiService.post('hackers/approval', value).then((response: any) => {
        console.log(response);
    });
  }

  public approvalFromHacker(value) { // set the node url here
      this.apiService.post('hackers/approval', value).then((response: any) => {
        console.log(response);
    });
  }

  public approvalFromHackerTeam(value) { // set the node url here
      this.apiService.post('hackers/approval', value).then((response: any) => {
        console.log(response);
    });
  }
}
