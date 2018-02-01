import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateService } from '../../store/services/user-state.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() cms: string;

  isAdmin: boolean;
  isAuthenticated: boolean;
  isIdeaExists: boolean;

  constructor(private router: Router,
              private userStateService: UserStateService) {
                this.getAdmin();
                this.getAunthenticated();
                this.getIdea();
              }
getAdmin() {
  this.userStateService.isAdmin().subscribe(condition => {
    this.isAdmin = condition;
  });
}

getAunthenticated() {
  this.userStateService.isAuthenticated().subscribe(condition => {
    this.isAuthenticated = condition;
  });
}

getIdea() {
  this.userStateService.isIdeaExists().subscribe(condition => {
    this.isIdeaExists = condition;
  });
}
  ngOnInit() {}

  login() {
    this.router.navigate(['/signin']);
  }

  logout() {
    this.userStateService.purgeAuth();
  }
}
