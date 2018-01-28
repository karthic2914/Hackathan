import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-list-request-to-hacker',
  templateUrl: './search-list-request-to-hacker.component.html',
  styleUrls: ['./search-list-request-to-hacker.component.css']
})
export class SearchListRequestToHackerComponent implements OnInit {
  @Input() HackerDetails: any;
  constructor() { }

  ngOnInit() {
  }

}
