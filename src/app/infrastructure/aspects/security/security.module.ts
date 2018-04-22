import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as services from './services';
import * as guards from './guards';
import { AdalService } from 'adal-angular4';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class SecurityModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [
        AdalService,
        services.UserRouteAuthorizationService,
        services.SecurityService,
        guards.AuthorizationGuard
      ]
    };
  }
}
