import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateService } from "../../../store/services/user-state.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  errors: { [key: string]: string } = {};
  isSubmit = false;

  constructor(private router: Router,
              private userStateService: UserStateService,
              private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      skillSet: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  signUp(form) {
    const data = this.signUpForm.value;
    data.skillSet = data.skillSet.split(/[ ,]+/).filter(Boolean);
    this.userStateService.signup(data)
      .then(res => this.router.navigateByUrl('/'),
        err => {
          this.errors = err.error;
          this.isSubmit = false;
        });
  }
}
