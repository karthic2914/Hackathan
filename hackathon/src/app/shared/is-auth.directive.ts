import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserStateService } from "../store/services/user-state.service";

@Directive({
  selector: '[appIsAuth]'
})
export class IsAuthDirective implements OnInit {

  constructor(private userService: UserStateService,
              private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  condition: boolean;

  ngOnInit() {
    return this.userService.isAuthenticated().subscribe(isAuthenticated => {
      if ((isAuthenticated && this.condition) || (!isAuthenticated && !this.condition)) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  @Input() set appIsAuth(condition: boolean) {
    this.condition = condition;
  }
}
