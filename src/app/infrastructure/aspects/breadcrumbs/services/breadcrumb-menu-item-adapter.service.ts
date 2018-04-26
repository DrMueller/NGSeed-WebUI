import { Injectable } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { BreadcrumbEntry } from '../models';

@Injectable()
export class BreadcrumbMenuItemAdapterService {
  public adapt(breadcrumbs: BreadcrumbEntry[]): MenuItem[] {
    return breadcrumbs.map(bc => this.adaptBreadcrumb(bc));
  }

  private adaptBreadcrumb(breadcrumb: BreadcrumbEntry): MenuItem {
    const menuItem = this.createTemplate();

    menuItem.label = breadcrumb.label;
    menuItem.routerLink = [breadcrumb.url];
    menuItem.routerLinkActiveOptions = { exact: true };
    return menuItem;
  }

  private createTemplate(): MenuItem {
    return <MenuItem>{
      routerLinkActiveOptions: { exact: true }
    };
  }
}
