import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsStateService } from '../../store/services/news-state.service';

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.css']
})
export class PublishFormComponent implements OnInit {

 // @Output() newTitle: EventEmitter<string> = new EventEmitter<string>();
 // @Output() newDescription: EventEmitter<string> = new EventEmitter<string>();
 // @Output() newDate: EventEmitter<string> = new EventEmitter<string>();

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
      description: this.description
    };
    this.newsStateService.store(this.newsObj);
    // this.newTitle.emit(this.title);
    // this.newDescription.emit(this.description);
    // this.newDate.emit(this.date);
  }

}
