import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserManagementNavigationService {

  public constructor(private router: Router) { }

  public navigateToUserDetails() {
    this.router.navigate(['/details']);
  }
}
