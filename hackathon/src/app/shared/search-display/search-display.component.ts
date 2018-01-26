import { Component, OnInit, Input } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {

  @Input() ideaDetails: any;

  hackIdea = 'Choose Idea';
  imgSrc:string;
  description:string;
  teamName:string;
  flag : boolean = false;
  disableDrop:boolean = false;
  teamObject = {idea:'', team:'', descrp:''};

  ideasList = [
    {id: 0, name: "Choose Idea", image: '', team:"", desc:""},
    {id: 1, name: "ideaA", image: '/../../assets/images/2017.jpg',team:"TeamA", desc:"hello"},
    {id: 2, name: "ideaB", image: '/../../assets/images/2016.jpg',team:"TeamB", desc:"hey"},
    {id: 3, name: "ideaC", image: '/../../assets/images/2015.jpg',team:"TeamC", desc:"welcome"}
  ];
 
  constructor(private hackerStateService: HackerStateService) { }

  ngOnInit() {
    console.log(this.hackIdea)
  }

  public onSubmit(value) {
    this.flag = true;
    console.log(value);
    for(let i = 0; i < this.ideasList.length; i++){
      if(value.hackIdea === this.ideasList[i].name){
        this.imgSrc = this.ideasList[i].image;
        this.teamName = this.ideasList[i].team;
        this.description = this.ideasList[i].desc;
      }
    }    
   // this.hackerStateService.searchHackers(value);
  }

  public requestHacker(hack) {
    console.log(hack);
    this.teamObject.idea = hack;
    this.teamObject.team = this.teamName;
    this.teamObject.descrp = this.description;
    console.log(this.teamObject);
    this.flag = false;
    this.disableDrop = true;
    this.hackerStateService.requestHacker('data should pass here');
  }

  changedOption(idea){
    console.log(idea);
      for(let i = 0; i < this.ideasList.length; i++){
        if(idea === this.ideasList[i].name){
          this.imgSrc = this.ideasList[i].image;
          this.teamName = this.ideasList[i].team;
          this.description = this.ideasList[i].desc;
        }
      }
  }
}
