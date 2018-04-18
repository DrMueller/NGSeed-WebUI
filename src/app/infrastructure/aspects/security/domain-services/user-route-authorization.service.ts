import { Injectable } from '@angular/core';

import { SecurityService } from './security.service';

@Injectable()
export class UserRouteAuthorizationService {

  constructor(private securityService: SecurityService) { }

  public isAuthorizedForRoute(route: string): boolean {
    if (route.startsWith('/')) {
      route = route.substr(1);
    }

    const currentUser = this.securityService.getCurrentUser();
    if (!currentUser.isAuthenticated) {
      return route === 'home'; // Home is always allowed
    }

    return true;
  }
}
