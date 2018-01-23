import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HackerStateService {

  constructor(private http: Http) { }

  public postAnIdea(value) { // set the node url here
      this.http.post('http://localhost:3000//hackers/approval', value).toPromise().then((response: any) => {
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

}
