import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.component.html',
  styleUrls: ['./idea-details.component.css']
})
export class IdeaDetailsComponent implements OnInit, OnDestroy {
  private ideaSubscribe: Subscription;
  private subscription: Subscription;
  private ideaObj: any;
  private cms: any;
  private ideaId: number;
  private readIdeaObj: any;

  constructor(
    private store: Store<AppStore>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.cms = stores.cms;
    });
  }

  ngOnInit() {
    this.ideaSubscribe = this.store.subscribe((stores: AppStore) => {
      this.subscription = this.route.queryParams.subscribe(params => {
        this.ideaId = params['id'];
      });
      this.ideaObj = stores.ideas;
      const ideaDetails: any[] = this.ideaObj.ideas;
      for (const entry of ideaDetails) {
        if (entry._id === this.ideaId) {
          this.readIdeaObj = entry;
        }
      }
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
