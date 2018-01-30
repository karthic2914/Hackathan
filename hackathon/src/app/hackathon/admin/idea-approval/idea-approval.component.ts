import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/models/hackathon-store.model';
import { AdminStateService } from '../../../store/services/admin-state.service';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-idea-approval',
  templateUrl: './idea-approval.component.html',
  styleUrls: ['./idea-approval.component.css']
})
export class IdeaApprovalComponent implements OnInit, OnDestroy {
  requestData: any;
  public dataObj: any;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'status';
  public sortOrder = 'asc';
  modalRef: BsModalRef;

  private subscription: Subscription;

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
    const index = this.dataObj.indexOf(item);
    this.dataObj.splice(index, 1);
  }

  Approve(item) {
    this.requestData = item;
    this.requestData.status = 'approved';
    this.adminStateService.updateAnIdea(this.requestData);
  }

  Reject(item) {
    this.requestData = item;
    this.requestData.status = 'rejected';
    this.adminStateService.updateAnIdea(this.requestData);
  }

  isInvalid(item) {
    if ( item.status === 'pending' ) {
      return 'enabled';
    }
    return 'disabled';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    return false;
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
