import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as domainServices from './domain-services';
import * as guards from './guards';
import * as components from './components';
import { AdalService } from 'adal-angular4';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    components.UserInfoComponent
  ],
  declarations: [
    components.UserInfoComponent
  ]
})
export class SecurityModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [
        AdalService,
        domainServices.UserRouteAuthorizationService,
        domainServices.SecurityService,
        guards.AuthorizationGuard
      ]
    };
  }
}
