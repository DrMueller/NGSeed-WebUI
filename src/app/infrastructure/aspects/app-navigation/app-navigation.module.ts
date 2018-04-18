import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecurityModule } from 'app/infrastructure/aspects/security';

import * as comp from './components';
import * as serv from './services';

@NgModule({
  exports: [
    comp.AppNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SecurityModule
  ],
  declarations: [
    comp.AppNavigationComponent
  ],
  providers: [
    serv.AppNavigationEntryFactory
  ]
})
export class AppNavigationModule { }
