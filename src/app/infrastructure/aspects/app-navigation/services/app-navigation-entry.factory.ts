import { Injectable } from '@angular/core';

import { UserRouteAuthorizationService } from 'app/infrastructure/aspects/security';

import { AppNavigationEntry } from '../models';

@Injectable()
export class AppNavigationEntryFactory {

  public createEntries(): AppNavigationEntry[] {
    const result = new Array<AppNavigationEntry>();

    result.push(this.createWithSecurity('Home', '/home'));
    result.push(this.createWithSecurity('Playground', '/playground'));

    return result;
  }

  private createWithSecurity(displayText: string, route: string): AppNavigationEntry {
    const isNavigatable = this.userAuthorizationService.isAuthorizedForRoute(route);
    return new AppNavigationEntry(displayText, route, isNavigatable);
  }

  constructor(private userAuthorizationService: UserRouteAuthorizationService) { }
}
