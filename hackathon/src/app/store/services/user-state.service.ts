import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import * as JWT from 'jwt-decode';
import { Store, Action } from '@ngrx/store';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserStateService {

  constructor(private jwtService: JwtService,
              private apiService: ApiService,
              public store: Store<User>,
              private router: Router) {
  }

  setAuth(token) {
    this.jwtService.setToken(token);
  }

  isAuthenticated(): Observable<boolean> {
    return this.store.map((store: User) => store.user && !!store.user.email);
  }

  isAdmin(): Observable<boolean> {
    return this.store.map((store: User) => !!store.user.isAdmin);
  }

  isIdeaExists(): Observable<boolean> {
    return this.store.map((store: User) => !!store.user.isIdeaExist);
  }


  userLoggedIn = (user: User) => ({
    type: 'USER_LOGGED_IN',
    payload: user
  });

  /**
   * Check if user is authorized and return token
   */
  public auth(data): Promise<any> {
    return this.apiService.post('user/auth', {data: data})
      .then((data: any) => {
        this.store.dispatch(this.userLoggedIn({user: JWT(data.user.token)}));
        this.setAuth(data.user.token);
        return data;
      })
      .catch((err: any) => Promise.reject(err));
  }

  /**
   * Register a new user.
   */
  public signup(data): Promise<any> {
    return this.apiService.post('user/signup', {data: data})
      .then((data: any) => {
        this.store.dispatch(this.userLoggedIn({user: JWT(data.user.token)}));
        this.setAuth(data.user.token);
        return data;
      })
      .catch((err: any) => Promise.reject(err));
  }

  populateUser() {
    if (this.jwtService.getToken()) {
      this.store.dispatch(this.userLoggedIn({user: JWT(this.jwtService.getToken())}));
    } else {
      this.purgeAuth();
    }
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.store.dispatch({
      type: 'USER_LOGGED_OUT',
      payload: {}
    });
    this.router.navigateByUrl('/');
  }
}
