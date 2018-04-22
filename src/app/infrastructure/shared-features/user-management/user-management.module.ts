import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CollapsibleCardModule } from 'app/infrastructure/widgets/collapsible-card';

import * as components from './components';
import * as appServices from './app-services';
import { PlaygroundRoutingModule } from './user-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    CollapsibleCardModule
  ],
  exports: [
    components.UserDetailsComponent,
    components.UserMenuComponent
  ],
  declarations: [
    components.UserMenuComponent,
    components.UserManagementComponent,
    components.UserDetailsComponent
  ]
})
export class UserManagementModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserManagementModule,
      providers: [
        appServices.UserManagementNavigationService
      ]
    };
  }
}
