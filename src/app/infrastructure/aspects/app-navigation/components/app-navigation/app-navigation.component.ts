import { Component, OnInit } from '@angular/core';

import { AppInfo, EnvironmentService } from 'app/infrastructure/core-services/environment';

import { AppNavigationEntry } from '../../models';
import { AppNavigationEntryFactory } from '../../services';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  public get appInfo(): AppInfo {
    return this.environmentService.appInfo;
  }

  public appNavigationEntries: AppNavigationEntry[] = [];

  public constructor(
    private appNavigationService: AppNavigationEntryFactory,
    private environmentService: EnvironmentService) { }

  public ngOnInit(): void {
    this.appNavigationEntries = this.appNavigationService.createEntries();
  }
}
