import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { User } from '../../store/models/user.model';

@Injectable()
export class NotAuthorize implements CanActivate {

  constructor(private router: Router,
              private store: Store<User>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.store.map((store: User) => {
      return !!store.user;
    });
  }
}
