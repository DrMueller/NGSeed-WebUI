import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import * as components from './components';
import * as services from './services';

@NgModule({
  exports: [
    components.BreadcrumbsDisplayComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  declarations: [
    components.BreadcrumbsDisplayComponent
  ],
  providers: [
    services.BreadcrumbBuilderService,
    services.BreadcrumbRouteFetchingService,
    services.BreadcrumbMenuItemAdapterService
  ]
})

export class BreadcrumbsModule { }
