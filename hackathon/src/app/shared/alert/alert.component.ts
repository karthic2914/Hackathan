import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Alert, AlertType } from './alert.model';
import { AlertService } from './alert.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
  alert: Alert;

  constructor(private alertService: AlertService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        this.alert = undefined;
        return;
      }
      this.alert = alert;
      this.displayAlert();
    });
  }

  displayAlert() {
    switch (this.alert.type) {
      case AlertType.Success:
        return this.showSuccess();
      case AlertType.Error:
        return this.showError();
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

  showSuccess() {
    this.toastr.success(this.alert.message, 'Success!');
  }

  showError() {
    this.toastr.error(this.alert.message, 'Error!');
  }
}
