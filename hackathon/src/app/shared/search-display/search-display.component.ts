import { Component, OnInit, Input } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {

  @Input() ideaDetails: any;

  private imgSrc: string;

  private teamName: string;

  private description: string;

  private hackIdea: string;

  private flag: boolean = false;

  private ideaId: string;

  constructor(private hackerStateService: HackerStateService) { }

  ngOnInit() {
    if (this.ideaDetails && this.ideaDetails.ideas) {
      this.hackIdea = this.ideaDetails.ideas[0].title;
      this.imgSrc = this.ideaDetails.ideas[0].image;
      this.teamName = this.ideaDetails.ideas[0].teamName;
      this.description = this.ideaDetails.ideas[0].description.replace(/<(?:.|\n)*?>/gm, '');
    }
  }
  public requestHacker() {
    this.hackerStateService.requestTeam({data: {ideaId: this.ideaId}}); // Once API ready, need to integrate

    /* {
      "id": "5a6a1fe95456463588c3cf2a" // send idea id
     } */
  }

  changedOption(idea) {
    if (this.hackIdea !== 'Choose one') {
      this.flag = true;
      for (let i = 0; i < this.ideaDetails.ideas.length; i++) {
        if (idea === this.ideaDetails.ideas[i].title) {
          this.imgSrc = this.ideaDetails.ideas[i].image;
          this.teamName = this.ideaDetails.ideas[i].teamName;
          this.description = this.ideaDetails.ideas[i].description.replace(/<(?:.|\n)*?>/gm, '');
          this.ideaId = this.ideaDetails.ideas[i]._id;
        }
      }
    } else {
       this.teamName = '';
       this.description = '';
       this.flag = false;
    }
  }
}
