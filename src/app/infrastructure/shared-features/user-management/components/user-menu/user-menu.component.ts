import { Component } from '@angular/core';

import { SecurityService, SecurityUser } from 'app/infrastructure/aspects/security';

import { UserManagementNavigationService } from '../../app-services';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  public constructor(
    private userSecurityService: SecurityService,
    private navigationService: UserManagementNavigationService) { }

  public get securityUser(): SecurityUser {
    return this.userSecurityService.getCurrentUser();
  }

  public logInClicked(): void {
    this.userSecurityService.logIn();
  }

  public logOutClicked(): void {
    this.userSecurityService.logOut();
  }

  public navigateToDetailsClicked(): void {
    this.navigationService.navigateToUserDetails();
  }
}
