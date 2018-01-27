import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-expand',
  templateUrl: './panel-expand.component.html',
  styleUrls: ['./panel-expand.component.css']
})
export class PanelExpandComponent implements OnInit {

  @Input() public panelData: any;

  constructor() {
   }

  ngOnInit() {
  }


}
