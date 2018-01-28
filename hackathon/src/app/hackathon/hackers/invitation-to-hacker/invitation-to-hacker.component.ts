import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/models/hackathon-store.model';

@Component({
  selector: 'app-invitation-to-hacker',
  templateUrl: './invitation-to-hacker.component.html',
  styleUrls: ['./invitation-to-hacker.component.css']
})
export class InvitationToHackerComponent implements OnInit {
  private subscription: Subscription;

  private  HackerDetails: any;

  constructor(private hackerStateService: HackerStateService, private store: Store<AppStore>) {
    this.hackerStateService.fetchHackerDetails().then((response: any) => {
      this.hackerStateService.fetchInvitedHackerList().then((data: any) => {
      this.subscription = this.store.subscribe((stores: AppStore) => {
        this.HackerDetails = stores.ideas;
        // this.HackerDetails = stores.ideas.data.users
        console.log('IdeaDeatails: ' + this.HackerDetails);
      });
    });
    });
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
}

