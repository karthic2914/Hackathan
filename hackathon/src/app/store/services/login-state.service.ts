import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginStateService {
  public token: string;
    public currentUser: any;

    constructor(private http: Http) {
        // set token if saved in local storage

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(' /user/auth ', { data: {username: username, password: password }})
            .map((response: Response) => {

                const token = response.json() && response.json().token;

                if (token) {

                    this.token = token;

                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
