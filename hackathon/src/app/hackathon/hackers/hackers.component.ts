import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';

@Component({
  selector: 'app-hackers',
  templateUrl: './hackers.component.html',
  styleUrls: ['./hackers.component.css']
})
export class HackersComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  private cms: any;

  constructor(private store: Store<AppStore>) {
    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.cms = stores.cms;
    });
  }

  ngOnInit() {
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
