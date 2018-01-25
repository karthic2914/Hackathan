import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.css']
})
export class PublishFormComponent implements OnInit {

  @Output() newTitle: EventEmitter<string> = new EventEmitter<string>();
  @Output() newDescription: EventEmitter<string> = new EventEmitter<string>();
  @Output() newDate: EventEmitter<string> = new EventEmitter<string>();

  title: string;
  description: string;
  date: string;

  constructor() { }

  ngOnInit() {
    this.title = '';
    this.description = '';
    this.date = '';
  }

  dataSubmit() {
    this.newTitle.emit(this.title);
    this.title = '';
    this.newDescription.emit(this.description);
    this.description = '';
    this.newDate.emit(this.date);
    this.description = '';
  }

}
