import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';

import { SecurityService } from 'app/infrastructure/aspects/security';
import { ToastConfigurationService } from 'app/infrastructure/core-services/toast/services';

import { ErrorInformation, ErrorRegistrationService } from '../error';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public errorInfo: ErrorInformation | null = null;

  public constructor(
    private errorRegistrationService: ErrorRegistrationService,
    private userSecurityService: SecurityService,
    private changeDetectorRef: ChangeDetectorRef,
    toastConfigurationService: ToastConfigurationService,
    viewContainerRef: ViewContainerRef) {
    this.errorRegistrationService.registerErrorCallback((errorInfo) => this.onErrorReceived(errorInfo));
    toastConfigurationService.setContainer(viewContainerRef);
    this.userSecurityService.initialize();
  }

  public ngOnInit(): void {
    this.userSecurityService.handleCallback();
  }

  private onErrorReceived(errorInfo: ErrorInformation) {
    this.errorInfo = errorInfo;
    this.changeDetectorRef.detectChanges();
  }
}
