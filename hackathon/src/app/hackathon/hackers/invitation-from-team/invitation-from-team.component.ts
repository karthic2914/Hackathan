import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { Response } from '@angular/http/src/static_response';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-invitation-from-team',
  templateUrl: './invitation-from-team.component.html',
  styleUrls: ['./invitation-from-team.component.css']
})
export class InvitationFromTeamComponent implements OnInit {
  approve = '';
  public dataObj =[{
    "ideaTitle": "Wing",
    "ideaDes": "<marquee>This is basic example of marquee This is basic example of marquee</marquee>",                  
    "owner": "aaaa",
    "action": "Approved",
    "approval": "yes"                 
  },
  {
    "ideaTitle": "Wing1",
    "ideaDes": "<marquee>This is basic example of marquee This is basic example of marquee</marquee>",
    "owner": "BBBB",
    "action": "Denied",
    "approval": "no"   
  },
  {
    "ideaTitle": "Wing2",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "CCCC",
    "action": "Approved",
    "approval": "no"   
  },
  {
    "ideaTitle": "Wing3",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "DDDD",
    "action": "Denied",
    "approval": "yes"   
  },
  {
    "ideaTitle": "Wing2",
    "ideaDes": "<marquee>This is basic example of marquee</marquee>",
    "owner": "CCCC",
    "action": "Approved",
    "approval": "yes"    
  },
  {
    "ideaTitle": "Wing3",
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
constructor(private hackerStateService: HackerStateService) { }

ngOnInit() {
  this.hackerStateService.getInvitationFromTeam()
  .subscribe((res: Response) => {
    this.dataObj = res.json();
    console.log(this.dataObj);
  },(err) => {
    console.log(`Server Error: ${err}`);
  });
}

sendApprove(item){
  console.log(item);
  this.hackerStateService.postInvitationFromTeam(item)
  .subscribe((res:Response) => {
    console.log(res);
  }, (err) =>{
    console.log(`Server Error:  ${err}`);
  });
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
