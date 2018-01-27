import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {UserStateService} from "../../store/services/user-state.service";
import { logsReducer } from '../../store/reducers/logs.reducer'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() cms: string;

  constructor(private router: Router,
              private userStateService : UserStateService) { }

  ngOnInit() {
  }

 login() {
  this.router.navigate(['/signin']);
 }

  logout() {
    this.userStateService.purgeAuth();
  }

}
