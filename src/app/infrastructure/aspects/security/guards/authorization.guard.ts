import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserRouteAuthorizationService } from '../domain-services';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  public constructor(private router: Router, private userRouteAuthorizationService: UserRouteAuthorizationService) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userRouteAuthorizationService.isAuthorizedForRoute(route.routeConfig!.path!)) {
      return true;
    }

    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
