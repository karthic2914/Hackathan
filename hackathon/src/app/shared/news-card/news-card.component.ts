import { Component, OnInit } from '@angular/core';
import { News } from './news-card-model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  news: News[] = [
    new News("Dutch Hackathon", "Dutch Hackathon", "http://static.dnaindia.com/sites/default/files/styles/third/public/2016/10/02/506712-smart-india-hackathon.png?itok=LRKf5Zop"),
    new News("NL Hackathon", "NL Hackathon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoxY-p-vnw32UFS_PpakFXXiqqKDNNCSW5M3vB6-RSuLF8gYp"),
    new News("Smart India Hackathon", "Smart India Hackathon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_IygYA_u2SZYXo9xHi_Na0X9w0fAQiyj7Zyfn841i144ao4c"),
    new News("Block Chain Hackathon", "Block Chain Hackathon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT573HdAFVBSEVacZPoENP6bPLW49hGy_r1U-0Syj9WaYGobAmUUA"),
    new News("World Hackathon", "World Hackathon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvEqE5JHAgpYtQhOXdQjY0OAWUMdy8sQSMylYQWVfLXfdtdI5pyg"),
    new News("Dutch Health Hackathon", "Dutch Health Hackathon", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GzYSRovNxxY6-0AB2Kawi3gNycKZV4320SGcKxxTEHTMA1eVmg")
  ];
  constructor() { }

  ngOnInit() {
  }

}

