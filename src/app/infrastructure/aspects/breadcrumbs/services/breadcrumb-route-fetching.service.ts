import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';

import { GenericAction } from 'app/infrastructure/types/callbacks';

import { BreadcrumbEntry } from '../models';
import { BreadcrumbBuilderService } from '../services/breadcrumb-builder.service';

@Injectable()
export class BreadcrumbRouteFetchingService {
  public constructor(
    private router: Router,
    private breadCrumBuilder: BreadcrumbBuilderService) { }

  public initialize(callback: GenericAction<BreadcrumbEntry[]>): void {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .distinctUntilChanged()
      .map(() => {
        const entries = this.breadCrumBuilder.buildBreadCrumbs();
        callback(entries);
      }).subscribe();
  }
}
