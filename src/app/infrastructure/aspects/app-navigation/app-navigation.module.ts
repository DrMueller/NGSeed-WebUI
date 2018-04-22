import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserManagementModule } from 'app/infrastructure/shared-features/user-management';

import * as comp from './components';
import * as serv from './services';

@NgModule({
  exports: [
    comp.AppNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserManagementModule
  ],
  declarations: [
    comp.AppNavigationComponent
  ],
  providers: [
    serv.AppNavigationEntryFactory
  ]
})
export class AppNavigationModule { }
