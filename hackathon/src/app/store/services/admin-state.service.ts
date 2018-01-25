import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AdminStateService {

  constructor(private http: Http) { }

  //Admin >> profile 
  public getProfileList(value) { // set the node url here
    this.http.post('http://localhost:3000//admin/profilelist', value).toPromise().then((response: any) => {
      console.log(response);
    });
  }

  //Admin >> profile 
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

}
