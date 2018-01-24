import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStateService } from '../../../store/services/login-state.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model: any = {};
  error = '';

  constructor(private router: Router, private loginStateService: LoginStateService) { }

  ngOnInit() {
  }

  signIn() {

        console.log('Login in process');
        console.log(this.model.username, this.model.password);
      this.loginStateService.login(this.model.username, this.model.password)
          .subscribe(result => {
              if (result === true) {
                  this.router.navigate(['/']);
              } else {
                  this.error = 'Username or password is incorrect';
              }
          });

    }
}
