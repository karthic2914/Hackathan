import { Component, OnInit, OnDestroy } from '@angular/core';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/models/hackathon-store.model';



@Component({
  selector: 'app-idea-approval',
  templateUrl: './idea-approval.component.html',
  styleUrls: ['./idea-approval.component.css']
})
export class IdeaApprovalComponent implements OnInit, OnDestroy {
  requestData: any;
  public dataObj: any;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "Tags";
  public sortOrder = "asc";

  private subscription: Subscription;

  constructor(private hackerStateService: HackerStateService, private store: Store<AppStore>) {

    this.hackerStateService.fetchAllIdeas().then((response: any) => {
      this.subscription = this.store.subscribe((stores: AppStore) => {
        this.dataObj = stores.ideas;
      });
    });
  }

  ngOnInit() {
  }

  remove(item) {
    console.log(item);
    const index = this.dataObj.indexOf(item);
    this.dataObj.splice(index, 1);
  }

  Approve(item) {
    this.requestData = item;
    this.requestData.status = "approved";
    window.alert("Approved" + this.requestData);
    this.hackerStateService.updateAnIdea(this.requestData);
  }

  Reject(item) {
    this.requestData = item;
    this.requestData.status = "denied";
    window.alert("Rejected");
    this.hackerStateService.updateAnIdea(this.requestData);
  }

  isInvalid(item){
    if( item.status === 'pending' ){
      return 'enabled';
    }
    return 'disabled';
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
