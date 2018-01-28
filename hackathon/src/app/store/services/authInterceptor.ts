import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JwtService } from './jwt.service';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService,
              private store: Store<User>,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(() => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.purgeAuth();
        }
      }
    });
  }

  private purgeAuth = () => {
    this.jwtService.destroyToken();
    this.store.dispatch({
      type: 'USER_LOGGED_OUT',
      payload: {}
    });
    this.router.navigateByUrl('/signin');
  }
}
