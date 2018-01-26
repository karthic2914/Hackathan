import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../../store/services/hacker-state.service';

@Component({
  selector: 'app-invitation-from-hacker',
  templateUrl: './invitation-from-hacker.component.html',
  styleUrls: ['./invitation-from-hacker.component.css']
})
export class InvitationFromHackerComponent implements OnInit {
  constructor(private hackerStateService: HackerStateService){}
  public dataObj =[{
    "ideaTitle": "111",
    "ideaDes": "<marquee>This is basic example of marquee This is basic example of marquee</marquee>",                  
    "owner": "aaaa",
    "action": "Approved",
    "approval": "yes"                 
  },
  {
    "ideaTitle": "222",
    "ideaDes": "<marquee>This is basic example of marquee This is basic example of marquee</marquee>",
    "owner": "BBBB",
    "action": "Denied",
    "approval": "no"   
  },
  {
    "ideaTitle": "333",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "CCCC",
    "action": "Approved",
    "approval": "yes"   
  },
  {
    "ideaTitle": "444",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "DDDD",
    "action": "Denied",
    "approval": "no"   
  },
  {
    "ideaTitle": "555",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "CCCC",
    "action": "Approved",
    "approval": "no"    
  },
  {
    "ideaTitle": "666",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "DDDD",
    "action": "Denied",
    "approval": "yes"   
  }];
public filterQuery = "";
public rowsOnPage = 10;
public sortBy = "ideaTitle";
public sortOrder = "asc";
public ideaDesciption = "";
//modalRef: BsModalRef;
content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';

ngOnInit() {
 
}

remove(item){
console.log(item);
const index = this.dataObj.indexOf(item);
this.dataObj.splice(index, 1);
}

public sortByWordLength = (a: any) => {
return a.action.length;
}
showPreview(item){
console.log(item);
this.ideaDesciption = item.ideaDes;
//this.modalRef = this.modalService.show(template);
return false;
}



}
