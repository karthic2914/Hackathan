import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hackathon-banner',
  templateUrl: './hackathon-banner.component.html',
  styleUrls: ['./hackathon-banner.component.css']
})
export class HackathonBannerComponent implements OnInit {

  @Input() cms: any;

  constructor() { }

  ngOnInit() {
  }

  selectDiv(banner) {
    document.querySelector('.' + banner.className).scrollIntoView({
      behavior : 'smooth'
    });
  }

}
