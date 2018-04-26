import { Component, OnInit } from '@angular/core';

import { BreadcrumbRouteFetchingService, BreadcrumbMenuItemAdapterService } from '../../services';
import { BreadcrumbEntry } from '../../models';
import { MenuItem } from 'primeng/api';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-breadcrumbs-display',
  templateUrl: './breadcrumbs-display.component.html',
  styleUrls: ['./breadcrumbs-display.component.scss']
})
export class BreadcrumbsDisplayComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  public get homeMenuItem(): MenuItem {
    return <MenuItem>{
      icon: 'fa fa-home',
      routerLink: ['/home']
    };
  }

  public constructor(
    private breadcrumbRouteFetchingService: BreadcrumbRouteFetchingService,
    private breadcrumMenuItemAdapter: BreadcrumbMenuItemAdapterService) { }

  public ngOnInit(): void {
    this.breadcrumbRouteFetchingService.initialize((entries) => this.breadcrumbEntriesChanged(entries));
  }

  private breadcrumbEntriesChanged(entries: BreadcrumbEntry[]): void {
    this.menuItems = this.breadcrumMenuItemAdapter.adapt(entries);
  }
}
