import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {

  public dataObj = [{
    "ideaTitle": "Wing",
    "ideaDes": "<a href='#'>test<a>",
    "owner": "aaaa",
    "action": "Approved"
  },
  {
    "ideaTitle": "Wing1",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "BBBB",
    "action": "Denied"
  },
  {
    "ideaTitle": "Wing2",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "CCCC",
    "action": "Approved"
  },
  {
    "ideaTitle": "Wing3",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "DDDD",
    "action": "Denied"
  }];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "ideaTitle";
  public sortOrder = "asc";
  public ideaDesciption = "";
  
  constructor() { }

  ngOnInit() {
  }

  remove(item) {
    console.log(item);
    const index = this.dataObj.indexOf(item);
    this.dataObj.splice(index, 1);
  }

  public sortByWordLength = (a: any) => {
    return a.action.length;
  }
  showPreview(item) {
    console.log(item);
    this.ideaDesciption = item.ideaDes;    
    return false;
  }

}
