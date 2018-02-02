import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';
import { NewsStateService } from '../../store/services/news-state.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit, OnDestroy {
  private newsSubscribe: Subscription;
  public newsObj: any;
  private subscription: Subscription;
  private cms: any;
  public pageNumber = 1;

  constructor(
    private store: Store<AppStore>,
    private newsService: NewsStateService
  ) {
    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.cms = stores.cms;
    });
  }

  ngOnInit() {
    this.newsService.getActiveNews().then((response: any) => {
      this.newsSubscribe = this.store.subscribe((stores: AppStore) => {
        this.newsObj = stores.news;
      });
    });
  }

  public ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}

