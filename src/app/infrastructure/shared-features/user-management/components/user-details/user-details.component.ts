import { Component, OnInit } from '@angular/core';

import { SecurityService, SecurityUser } from 'app/infrastructure/aspects/security';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public get securityUser(): SecurityUser {
    return this.securityService.getCurrentUser();
  }


  constructor(private securityService: SecurityService) { }

  ngOnInit() {
    this.securityService.getCurrentUser();
  }

}
