import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HackerStateService {

  constructor(private http: HttpClient) { }

  public postAnIdea(value) {
    this.http.post('http://localhost:3000/hacker/postAnIdea', value).subscribe(
      (data: any) =>  {
        console.log(data);
      }
    );
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
