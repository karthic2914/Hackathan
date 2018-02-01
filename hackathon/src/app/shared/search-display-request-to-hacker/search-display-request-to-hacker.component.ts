import { Component, OnInit, Input } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';


@Component({
  selector: 'app-search-display-request-to-hacker',
  templateUrl: './search-display-request-to-hacker.component.html',
  styleUrls: ['./search-display-request-to-hacker.component.css']
})
export class SearchDisplayRequestToHackerComponent implements OnInit {
  @Input() HackerDetails: any;

  private imgSrc: string;

  private hackerEmail: string;

  private hackerSkill: string;

  private hackIdea: string;

  private userId: string;

  public test: string;

  // tslint:disable-next-line:no-inferrable-types
  private flag: boolean = false;

  constructor(private hackerStateService: HackerStateService) { }

  ngOnInit() {

  }

  public requestHacker() {
    console.log(this.userId);
    this.hackerStateService.requestHacker({data: {userId: this.userId} }).then((data) => {
      if (data.status === 'success') {
        console.log('Requested successfully');
      } else {
        console.log('Error Message: ' + data.error.errors.errors.global);
      }
    });
  }

  changedOption(idea) {
    if (this.hackIdea !== 'Choose one') {
      this.flag = true;
      this.HackerDetails.forEach(element => {
        if (element.username === idea) {
          this.hackerEmail = element.email;
          this.hackerSkill = element.profile.skillSet[0];
          this.userId = element._id;
        }
      });
    } else {
      this.flag = false;
      this.hackerEmail = '';
      this.hackerSkill = '';
    }
  }
}
