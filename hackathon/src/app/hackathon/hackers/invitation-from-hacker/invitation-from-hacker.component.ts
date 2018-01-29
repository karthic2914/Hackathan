import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/models/hackathon-store.model';

@Component({
  selector: 'app-invitation-from-hacker',
  templateUrl: './invitation-from-hacker.component.html',
  styleUrls: ['./invitation-from-hacker.component.css']
})
export class InvitationFromHackerComponent implements OnInit {

  private subscription: Subscription;

  private  IdeaDeatails: any;

  constructor(private hackerStateService: HackerStateService, private store: Store<AppStore>) {
    this.hackerStateService.invitationFromHacker().then((response: any) => {
      this.subscription = this.store.subscribe((stores: AppStore) => {
        this.IdeaDeatails = stores.ideas;
        console.log('IdeaDeatails: ' + this.IdeaDeatails);
      });
    });
  }

  ngOnInit() {
  }
  approval(user) { // approval should change based on check flag
    this.hackerStateService.addHackerToTeam({data: {userId: user.user._id, addMember: true }}).then((data) => {
      if (data.status === 'success') {
        alert('Approved');
      } else {
        alert('Error Message: ' + data.error.errors.errors.global);
      }
    });
  }
}
