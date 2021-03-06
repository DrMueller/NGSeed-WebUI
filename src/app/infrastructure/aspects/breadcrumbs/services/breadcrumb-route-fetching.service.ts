import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import { GenericAction } from 'app/infrastructure/types/callbacks';

import { BreadcrumbEntry } from '../models';
import { BreadcrumbBuilderService } from '../services/breadcrumb-builder.service';

@Injectable()
export class BreadcrumbRouteFetchingService {
  public constructor(
    private router: Router,
    private breadCrumBuilder: BreadcrumbBuilderService) { }

  public initialize(callback: GenericAction<BreadcrumbEntry[]>): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => {
        const root = this.router.routerState.snapshot.root;
        const entries = this.breadCrumBuilder.buildBreadCrumbs(root);
        callback(entries);
      })
    ).subscribe();
  }
}
