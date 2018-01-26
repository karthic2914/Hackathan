import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { ApiService } from './api.service';

@Injectable()
export class HackerStateService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  public postAnIdea(value) {
    this.http.post('http://localhost:3000/hacker/postAnIdea', value).subscribe(
      (data: any) =>  {
        console.log(data);
      }, (error) => {
        console.log(`Server Error: ${error}`);
      }
    );
  }
//Invitation from team
  public getInvitationFromTeam() { 
       return this.http.get('http://localhost:3000/hacker/invitationFromTeam');
      // this.apiService.get('/hacker/invitationFromTeam');
  }
  public postInvitationFromTeam(value) { 
    return this.http.post('http://localhost:3000/hacker/invitationFromTeam/approval', value);
    // this.apiService.post('/hacker/invitationFromTeam', value);
}

  public invitationFromHacker() { 
      return this.http.get('http://localhost:3000/hackers/invitation')
      .subscribe(
        (data: any) =>  {
          console.log(data);
        }, (error) => {
          console.log(`Server Error: ${error}`);
        }
      );
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
