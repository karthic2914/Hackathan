import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit, OnDestroy {
  private newsSubscribe: Subscription;
  private subscription: Subscription;
  private newsObj: any;
  private cms: any;
  private selectedNews: number;
  private readNewsObj: any;

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
    this.newsSubscribe = this.store.subscribe((stores: AppStore) => {
      this.subscription = this.route.queryParams.subscribe(params => {
        this.selectedNews = params['id'];
      });
      this.newsObj = stores.news;
      let neww: any[] = this.newsObj.blogs;
      for (let entry of neww) {
        if (entry._id == this.selectedNews) {
          this.readNewsObj = entry;
        }
      }
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
