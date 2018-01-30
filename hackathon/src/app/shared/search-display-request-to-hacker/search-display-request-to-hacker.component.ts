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

  private email: string;

  private hackerEmail: string;

  private skill: string;

  private hackIdea: string;

  private userId: string;

  public test: string;

  private flag: boolean = false;

  constructor(private hackerStateService: HackerStateService) { }

  ngOnInit() {

  }

  public requestHacker() {
    console.log(this.userId);
    this.hackerStateService.requestHacker({data: {userId: this.userId} }).then((data) => {
      if (data.status === 'success') {
        alert('Requested successfully');
      } else {
        alert('Error Message: ' + data.error.errors.errors.global);
      }
    })
  }

  changedOption(idea) {
    if (this.hackIdea !== 'Choose one') {
      this.flag = true;
      for (let i = 0; i < this.HackerDetails.hackerList.data.users.length; i++) {
        if (idea === this.HackerDetails.hackerList.data.users[i].username) {
          this.imgSrc = this.HackerDetails.hackerList.data.users[i].image;
          this.hackerEmail = this.HackerDetails.hackerList.data.users[i].email;
          this.email = this.HackerDetails.hackerList.data.users[i].email;
          this.skill = this.HackerDetails.hackerList.data.users[i].profile.skillSet[0];
          this.userId = this.HackerDetails.hackerList.data.users[i]._id;
        } else {
          this.email = '';
          this.skill = '';
        }
      }
    } else {
      this.flag = false;
      this.email = '';
      this.skill = '';
    }
  }
}
