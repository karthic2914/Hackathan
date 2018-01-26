import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/models/hackathon-store.model';

@Component({
  selector: 'app-invitation-to-team',
  templateUrl: './invitation-to-team.component.html',
  styleUrls: ['./invitation-to-team.component.css']
})
export class InvitationToTeamComponent implements OnInit {
  private subscription: Subscription;

  private  ideaDetails: any;

  constructor(private hackerStateService: HackerStateService, private store: Store<AppStore>) {
    this.hackerStateService.fetchAllIdeas().then((response: any) => {
      this.subscription = this.store.subscribe((stores: AppStore) => {
        this.ideaDetails = stores.ideas;
        console.log('IdeaDeatails: ' + this.ideaDetails);
      });
    });
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
