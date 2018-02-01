import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JwtService } from './jwt.service';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { Router } from "@angular/router";
import { AlertService } from '../../shared/alert/alert.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService,
              private store: Store<User>,
              private router: Router,
              private alertService: AlertService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do((res: any) => {
      if(res instanceof HttpResponse){
        if(res.body && res.body.message){
          this.alertService.success(res.body && res.body.message);
        }
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 400) {
          this.alertService.error(err.error && err.error.errors && err.error.errors && err.error.errors.global && err.error.errors.global || 'Some error caught please try again!');
        }
        if (err.status === 401) {
          this.alertService.error('You are not authorized. Please login');
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
