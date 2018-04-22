import { Injectable } from '@angular/core';

import { AdalService } from 'adal-angular4';

import { EnvironmentService } from 'app/infrastructure/core-services/environment';

import { SecurityUser, Claim } from '../models';

@Injectable()
export class SecurityService {
  public constructor(
    private adalService: AdalService,
    private environmentService: EnvironmentService) { }

  public handleCallback(): void {
    this.adalService.handleWindowCallback();
    if (this.adalService.userInfo.error) {
      throw new Error(this.adalService.userInfo.error);
    }
  }

  public initialize(): void {
    const adalConfig = this.environmentService.adalConfig;
    this.adalService.init(adalConfig);
  }

  public logIn(): void {
    this.adalService.login();
  }

  public logOut(): void {
    this.adalService.logOut();
  }

  public getCurrentUser(): SecurityUser {
    if (this.adalService.userInfo.authenticated) {
      const claims = this.getClaimsFromUser();

      return new SecurityUser(
        this.getUserName(),
        this.adalService.userInfo.authenticated,
        claims);
    }

    return SecurityUser.createUnauthenticated();
  }

  private getClaimsFromUser(): Claim[] {
    const profile = this.adalService.userInfo.profile;
    if (!profile) {
      return new Array<Claim>();
    }

    let claims = Object.keys(profile).map(f => {
      return new Claim(f, profile[f]);
    });

    claims = claims.sort((a, b) => (a.claimType > b.claimType ? 1 : -1));
    return claims;
  }

  private getUserName(): string {
    if (this.adalService.userInfo.profile && this.adalService.userInfo.profile.unique_name) {
      return this.adalService.userInfo.profile.unique_name;
    }

    return 'UNKNOWN';
  }
}
