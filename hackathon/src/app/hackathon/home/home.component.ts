import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @Input() isHacker : boolean;
  @Input() isAdmin : boolean;
  private subscription: Subscription;

    @Input() cms: any;

  constructor(private store: Store<AppStore>) {
    this.subscription = this.store.subscribe((stores: AppStore) => {
      this.cms = stores.cms;
      console.log('cms' + JSON.stringify(this.cms));
    });
  }

  ngOnInit() {
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
