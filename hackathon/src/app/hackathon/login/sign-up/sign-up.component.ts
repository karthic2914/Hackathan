import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: any = {};
  public info: any = {};

  constructor(private http: Http) { }

  ngOnInit() {
  }

  signUp() {

    this.info = {
      username: this.model.username,
      password: this.model.password,
      confirmPassword: this.model.confirmpassword,
      email: this.model.email,
      primarySkillSet: this.model.skillSet
     };
    console.log('signup in process');
    console.log(this.info);

    this.info.primarySkillSet = this.info.primarySkillSet.split(/[ ,]+/).filter(Boolean);
    console.log(this.info);
         this.http.post('', this.info)
         .subscribe(
               () => {},
               err => console.log(err)
           );
    }
}
