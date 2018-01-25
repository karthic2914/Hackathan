import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-approval',
  templateUrl: './idea-approval.component.html',
  styleUrls: ['./idea-approval.component.css']
})
export class IdeaApprovalComponent implements OnInit {


  public dataObj = [{
    "Title": "Google",
    "Tags": "Angularjs",
    "Description": "Google is a search engine",
    "Preview": "https://www.google.co.in"
  },
  {
    "Title": "Facebook",
    "Tags": "Reactjs",
    "Description": "Facebook is a social networking site",
    "Preview": "https://www.Facebook.com"
  },
  {
    "Title": "Gmail",
    "Tags": "Nodejs",
    "Description": "It is a mail Exchange server",
    "Preview": "https://www.gmail.com"
  },
  {
    "Title": "GMap",
    "Tags": "AWS",
    "Description": "It provides directions",
    "Preview": "https://www.gmap.com"
  }];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "Tags";
  public sortOrder = "asc";
  constructor() { }

  ngOnInit() {
  }
  remove(item) {
    console.log(item);
    const index = this.dataObj.indexOf(item);
    this.dataObj.splice(index, 1);
  }
  Approve() {
    window.alert("Approved");
  }
  Reject() {
    window.alert("Rejected");
  }

}
