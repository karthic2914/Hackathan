import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';
import { AdminStateService } from '../../store/services/admin-state.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppStore } from '../../store/models/hackathon-store.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MasterListComponent implements OnInit {

  public dataObj: any;
  private subscription: Subscription;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'ideaTitle';
  public sortOrder = 'asc';
  public ideaDesciption = '';
  modalRef: BsModalRef;

  constructor(private hackerStateService: HackerStateService,
    private adminStateService: AdminStateService, private store: Store<AppStore>,
    private modalService: BsModalService) {

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    return false;
  }

}
