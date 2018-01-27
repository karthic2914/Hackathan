import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';
import { BlogService } from '../../store/services/blog.service'

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit {
  private show: Boolean = false;
  private subscription: Subscription;
  blogs:any;
  constructor(private blogService: BlogService,  private store: Store<AppStore>) { 
     this.blogService.getBlogs().then((response: any) => {
      this.subscription = this.store.subscribe((stores: AppStore) => {
        this.blogs = stores.news;
        console.log(this.blogs);
      });
    });
  }

  ngOnInit() {
  }
  onClick() {
    this.show = !this.show;
  }
}
