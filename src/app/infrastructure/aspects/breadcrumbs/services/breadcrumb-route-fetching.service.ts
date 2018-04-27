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
        // ActivatedRoute can'be used, since this is also a snapshot, which we don't have
        // herefore we use the dynamic state snapshot
        // See also: https://stackoverflow.com/questions/39977962/angular-2-0-2-activatedroute-is-empty-in-a-service
        const tra = this.router.routerState.snapshot.root;
        const entries = this.breadCrumBuilder.buildBreadCrumbs(tra);
        callback(entries);
      }).subscribe();
  }
}
