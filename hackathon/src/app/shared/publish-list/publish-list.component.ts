import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnDestroy, ChangeDetectionStrategy  } from '@angular/core';
import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common';
import { NewsModel } from '../../store/models/news.model.publish';
import { NewsStateService } from '../../store/services/news-state.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppStore } from '../../store/models/hackathon-store.model';
import { AdminStateService } from '../../store/services/admin-state.service';


@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.css']

})
export class PublishListComponent implements OnInit, OnDestroy {
  public newsSubscribe: Subscription;
  private newTitle: any;
  public newsObj: any;
    @Input() public addList =  new EventEmitter<string>();
    @Input() newsideaspub: NewsModel[];

    public filterQuery = '';

    public rowsOnPage = 5;

    public sortBy = 'email';

    public sortOrder = 'asc';
    public requestObj: any;

    // public theDate: any = this.dataObj[0].date;

  constructor(private newsStateService: NewsStateService, private store: Store<AppStore>,
    private adminStateService: AdminStateService
  ) {
      // console.log('The date is ' , this.theDate);
  }
  ngOnInit() {
    console.log('NgOnInit');
    this.newsStateService.getNews().then((response: any) => {
      this.newsSubscribe = this.store.subscribe((stores: AppStore) => {
        this.newsObj = stores.news;
      });
    });
  }

  addListerner(value: any) {
    this.ngOnInit();
  }

  Approve(item) {
    this.requestObj = item;
    this.requestObj.isActive = true;
    this.adminStateService.updateNews(this.requestObj);
  }

  Reject(item) {
    this.requestObj = item;
    this.requestObj.isActive = false;
    this.adminStateService.updateNews(this.requestObj);
  }

  public ngOnDestroy(): void {}
}
