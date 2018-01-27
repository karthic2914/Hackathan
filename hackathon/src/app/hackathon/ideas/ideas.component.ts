import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';
import { Subscription } from 'rxjs/Subscription';
import { IdeaStateService } from '../../store/services/idea-state.service';
import { PanelExpandComponent } from '../../shared/panel-expand/panel-expand.component';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit, OnDestroy {
  private ideaSubscribe: Subscription;
  public ideaObj: any;
  private subscription: Subscription;
  private cms: any;

  constructor(
    private store: Store<AppStore>,
    private ideaService: IdeaStateService
  ) {
    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.cms = stores.cms;
    });
  }

  ngOnInit() {
    this.ideaService.getIdeas().then((response: any) => {
      this.ideaSubscribe = this.store.subscribe((stores: AppStore) => {
        this.ideaObj = stores.ideas;
      });
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
    this.ideaSubscribe.unsubscribe();
  }
}
