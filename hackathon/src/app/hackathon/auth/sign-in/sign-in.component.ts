import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserStateService} from '../../../store/services/user-state.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AppStore } from '../../../store/models/hackathon-store.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  authForm: FormGroup;
  errors: { [key: string]: string } = {};
  isSubmit = false;
  private subscription: Subscription;
  private  cms: any;
  loginFail: boolean;

  constructor(private router: Router,
              private userStateService: UserStateService,
              private formBuilder: FormBuilder,
              private store: Store<AppStore>) {
    this.authForm = this.formBuilder.group  ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.cms = stores.cms;
    });
  }

  ngOnInit() {
  }

  signIn() {
    this.isSubmit = true;
    const data = this.authForm.value;
    this.userStateService.auth(data)
      .then(res => this.router.navigateByUrl('/'),
        err => {
          this.errors = err.error;
          this.loginFail = !! this.errors
          this.isSubmit = false;
        });
  }
}
