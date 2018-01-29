import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';
import { AdminStateService } from '../../store/services/admin-state.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppStore } from '../../store/models/hackathon-store.model';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {

  public dataObj:any; 
  private subscription: Subscription;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "ideaTitle";
  public sortOrder = "asc";
  public ideaDesciption = "";
  
  constructor(private hackerStateService: HackerStateService,
    private adminStateService: AdminStateService, private store: Store<AppStore>) {

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
    const index = this.dataObj.ideas.indexOf(item);
    this.dataObj.ideas.splice(index, 1);
    this.adminStateService.deleteAnIdea(item);
  }

  public sortByWordLength = (a: any) => {
    return a.action.length;
  }

  showPreview(item) {
    console.log(item);
    this.ideaDesciption = item.ideaDes;    
    return false;
  }

}
