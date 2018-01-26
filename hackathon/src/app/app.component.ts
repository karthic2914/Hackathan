import {Component, OnInit} from '@angular/core';
import {UserStateService} from "./store/services/user-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.userStateService.populateUser();
  }

  constructor(private userStateService: UserStateService) {
  }
}
