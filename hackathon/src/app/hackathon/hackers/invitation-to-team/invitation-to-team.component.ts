import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../../store/services/hacker-state.service';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../store/models/hackathon-store.model';

@Component({
  selector: 'app-invitation-to-team',
  templateUrl: './invitation-to-team.component.html',
  styleUrls: ['./invitation-to-team.component.css']
})
export class InvitationToTeamComponent implements OnInit {
  private subscription: Subscription;
  private  ideaDetails: any;
  hackIdea = '';
  ideaId;
  description:string;
  teamName:string;
  flag : boolean = true;
  hackerHistory = [];
  disableDrop:boolean = false;
  teamObject = {idea:'', team:'', descrp:''};

  // ideasList = [
  //   {id: 0, name: "Choose Idea", image: '', team:"", desc:""},
  //   {id: 1, name: "ideaA", image: '/../../assets/images/2017.jpg',team:"TeamA", desc:"hello"},
  //   {id: 2, name: "ideaB", image: '/../../assets/images/2016.jpg',team:"TeamB", desc:"hey"},
  //   {id: 3, name: "ideaC", image: '/../../assets/images/2015.jpg',team:"TeamC", desc:"welcome"}
  // ];
 

  constructor(private hackerStateService: HackerStateService, private store: Store<AppStore>) {
    this.hackerStateService.fetchAllIdeas().then((response: any) => {
      this.subscription = this.store.subscribe((stores: AppStore) => {
        this.ideaDetails = stores.ideas.ideas;
        console.log(this.ideaDetails);
        this.hackIdea = this.ideaDetails[0].title
        console.log(this.hackIdea);
        this.teamName = this.ideaDetails[0].teamName;
        this.description = this.ideaDetails[0].description.replace(/<(?:.|\n)*?>/gm, '');
        console.log('IdeaDeatails: ' + this.ideaDetails);
      });
    });
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  public requestHacker(hack) {
    console.log(hack);
    this.teamObject.idea = hack;
    this.teamObject.team = this.teamName;
    this.teamObject.descrp = this.description;
    console.log(this.teamObject);
    this.flag = false;
    this.hackerHistory.push(this.teamObject);
    for(let i = 0; i < this.ideaDetails.length; i++){
      if(hack === this.ideaDetails[i].title){
        this.ideaId = this.ideaDetails[i]._id;
      }
    }
    console.log(this.ideaId);
    this.disableDrop = true;
    this.hackerStateService.requestHacker(this.ideaId);
  }

  changedOption(idea){
    this.flag = true;
    console.log(idea);
      for(let i = 0; i < this.ideaDetails.length; i++){
        if(idea === this.ideaDetails[i].title){
          //this.imgSrc = this.ideaDetails[i].image;
          this.teamName = this.ideaDetails[i].teamName;
          this.description = this.ideaDetails[i].description.replace(/<(?:.|\n)*?>/gm, '');
        }
      }
  }

}
