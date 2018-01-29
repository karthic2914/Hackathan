import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/models/hackathon-store.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-invitation-from-team',
  templateUrl: './invitation-from-team.component.html',
  styleUrls: ['./invitation-from-team.component.css']
})
export class InvitationFromTeamComponent implements OnInit {

private subscription: Subscription;

private  teamDetails: any;

constructor(private hackerStateService: HackerStateService, private store: Store<AppStore>) {
  this.hackerStateService.invitationFromTeam().then((response: any) => {
    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.teamDetails = stores.ideas;
    });
  });
}

ngOnInit() {
}

joinTeam(team) {
  this.hackerStateService.joinTeam({data: {ideaId: team._id}}).then((data)=> {
    if (data.status === 'success') {
      alert('Joined in group');
    } else {
      alert('Error Message: ' + data.error.errors.errors.global);
    }
  });
}

}
