import { Injectable } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { BreadcrumbEntry, BreadcrumbRouteConfig } from '../models';

@Injectable()
export class BreadcrumbBuilderService {

  constructor(private route: ActivatedRoute) { }

  public buildBreadCrumbs(): BreadcrumbEntry[] {
    const result = new Array<BreadcrumbEntry>();
    this.buildBreadCrumbsRecursive(this.route.root, '', result);

    return result;
  }

  private buildBreadCrumbsRecursive(
    route: ActivatedRoute,
    previousUrl: string,
    breadcrumbs: Array<BreadcrumbEntry>): void {

    let currentUrl = previousUrl;
    if (route.routeConfig && route.routeConfig.path) {
      currentUrl = `${currentUrl}${route.routeConfig.path}/`;

      if (route.routeConfig.data && route.routeConfig.data['breadcrumbConfig']) {
        const config = <BreadcrumbRouteConfig>route.routeConfig.data!['breadcrumbConfig'];
        const breadcrumb = new BreadcrumbEntry(config.label, currentUrl);
        breadcrumbs.push(breadcrumb);
      }
    }

    if (route.firstChild) {
      this.buildBreadCrumbsRecursive(route.firstChild, currentUrl, breadcrumbs);
    }
  }
}
