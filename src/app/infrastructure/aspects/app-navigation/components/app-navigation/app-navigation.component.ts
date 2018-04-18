import { Component, OnInit } from '@angular/core';

import { AppInfoService, ApplicationInformation } from 'app/infrastructure/core-services/app-info';

import { AppNavigationEntry } from '../../models';
import { AppNavigationEntryFactory } from '../../services';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  public applicationInformation: ApplicationInformation;
  public appNavigationEntries: AppNavigationEntry[] = [];

  public constructor(private appNavigationService: AppNavigationEntryFactory, private appInfoService: AppInfoService) { }

  public async ngOnInit(): Promise<void> {
    this.appNavigationEntries = this.appNavigationService.createEntries();
    this.applicationInformation = await this.appInfoService.getAppInfoAsync();
  }

}
