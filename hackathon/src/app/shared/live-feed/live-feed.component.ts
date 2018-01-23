import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit {
  private show: Boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.show = !this.show;
  }
}
