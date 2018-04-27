import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { BreadcrumbEntry, BreadcrumbRouteConfig } from '../models';

@Injectable()
export class BreadcrumbBuilderService {
  public buildBreadCrumbs(route: ActivatedRouteSnapshot): BreadcrumbEntry[] {
    const result = new Array<BreadcrumbEntry>();
    this.buildBreadCrumbsRecursive(route.root, '', result);

    return result;
  }

  private buildBreadCrumbsRecursive(
    route: ActivatedRouteSnapshot,
    previousUrl: string,
    breadcrumbs: Array<BreadcrumbEntry>): void {

    let currentUrl = previousUrl;
    if (route.routeConfig && route.routeConfig.path) {
      const combinedUrl = route.url.map(segment => segment.path).join('/');
      currentUrl = `${currentUrl}${combinedUrl}/`;

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
