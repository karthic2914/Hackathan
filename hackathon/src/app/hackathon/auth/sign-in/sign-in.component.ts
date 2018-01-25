import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserStateService} from "../../../store/services/user-state.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  authForm: FormGroup;
  errors: { [key: string]: string } = {};
  isSubmit = false;

  constructor(private router: Router,
              private userStateService: UserStateService,
              private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
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
          this.isSubmit = false;
        });
  }
}
