import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges  } from '@angular/core';
import { Data } from '@angular/router/src/config';
import { DatePipe } from '@angular/common';
import { IdeaPub } from '../../store/models/news.model.publish';
import { NewsStateService } from '../../store/services/news-state.service';


@Component({
  selector: 'app-publish-list',
  templateUrl: './publish-list.component.html',
  styleUrls: ['./publish-list.component.css']
})
export class PublishListComponent implements OnInit {

  private newTitle: any;

  @Input() newsideaspub: IdeaPub[];

   public dataObj = [{

    'date': 1516709036,

    'header': 'tellus.eu.augue@arcu.com',

    'description': '2016-01-09T14:48:34-08:00'

     },

     {

    'date': 1516713319,

    'header': 'sed.dictum@Donec.org',

    'description': '2017-01-23T20:09:52-08:00'

     },

     {

    'date': 1516709036,

    'header': 'mauris@Craslorem.ca',

    'description': '2015-11-19T19:11:33-08:00'

     },

     {

    'date': 1516709036,

    'header': 'mi.Aliquam@Phasellus.net',

    'description': '2015-11-02T07:59:34-08:00'

     }];

    public filterQuery = '';

    public rowsOnPage = 10;

    public sortBy = 'email';

    public sortOrder = 'asc';

    public theDate: any = this.dataObj[0].date;

  constructor(private ideapublishService: NewsStateService) {
    console.log('The date is ' , this.theDate);
  }
  ngOnInit() {
    this.ideapublishService.getAll().subscribe(
      (ideapublish: IdeaPub[]) => {
        ideapublish.forEach(publish => this.newsideaspub.push(publish));
      }
    );
  }
}
