import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {

  constructor(private hackerStateService: HackerStateService) { }

  ngOnInit() {
  }

  public onSubmit(value) {
    this.hackerStateService.searchHackers(value);
  }

  public requestHacker() {
    this.hackerStateService.requestHacker('data should pass here');
  }

}
