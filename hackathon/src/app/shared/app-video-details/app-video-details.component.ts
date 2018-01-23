import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../../hackathon/home/home.component'

@Component({
  selector: 'app-app-video-details',
  templateUrl: './app-video-details.component.html',
  styleUrls: ['./app-video-details.component.css']
})
export class AppVideoDetailsComponent implements OnInit {
text:any;
  constructor(private homecomponent : HomeComponent) { }

  ngOnInit() {
    this.text = this.homecomponent.cms.videoDetails;
    console.log(this.text);
  }

}
