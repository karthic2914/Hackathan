import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor(private hackerStateService: HackerStateService) { }

  ngOnInit() {
  }

  public onSubmit(value) {
    this.hackerStateService.postAnIdea(value);
  }

}
