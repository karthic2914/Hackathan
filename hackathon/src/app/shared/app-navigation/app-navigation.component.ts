import { Component, OnInit, Output, ElementRef } from '@angular/core';
import { HomeComponent } from '../../hackathon/home/home.component'

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.css']
})
export class AppNavigationComponent implements OnInit {
isHacker = true;
isAdmin = true;
homeText: any;
selectedItem;

  constructor(private homecomponent : HomeComponent,
              private elementRef : ElementRef) { }

  ngOnInit() {
    console.log(this.isHacker);
    console.log(this.isAdmin);
      this.homeText = this.homecomponent.cms;
      console.log(this.homeText.idea)     
  }

  isSelected($event){
    this.selectedItem = this.elementRef.nativeElement.querySelectorAll('li');
    console.log(this.selectedItem);
    console.log($event.target.parentNode.parentNode.parentNode)
    console.log(this.selectedItem[1] === $event.target.parentNode.parentNode.parentNode);
    for(let i = 0; i < this.selectedItem.length; i++){
      if(this.selectedItem[i] === $event.target.parentNode.parentNode.parentNode){
        this.selectedItem[i].className = 'selected';
      }else{
        this.selectedItem[i].className = "";
      }
    }
    
    
  }

}
