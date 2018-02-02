import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NewsStateService } from '../../store/services/news-state.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.css']
})
export class PublishFormComponent implements OnInit {

 // @Output() newTitle: EventEmitter<string> = new EventEmitter<string>();
 // @Output() newDescription: EventEmitter<string> = new EventEmitter<string>();
 // @Output() newDate: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('childModal') childModal: ModalDirective;
  private title: string;
  private description: string;
  private date: string;
  private newsObj: any;

  constructor(private newsStateService: NewsStateService) { }

  ngOnInit() {
    this.title = '';
    this.description = '';
    this.date = '';
  }

  dataSubmit() {
    this.newsObj = {
      title: this.title,
      description: this.description,
      isActive : false
    };
    this.newsStateService.postNews(this.newsObj).then((response: any) => {
      console.log('post response', response);
      if (response.blogs.length) {
        this.showChildModal();
      }
    });
  }

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  validateText() {
    if (this.description.length > 46) {
      return 'enabled';
    }
    return 'disabled';
  }
}
