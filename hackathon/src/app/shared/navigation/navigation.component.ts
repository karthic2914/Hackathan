import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() cms: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
 login() {
  this.router.navigate(['/signIn']);

 }
}
