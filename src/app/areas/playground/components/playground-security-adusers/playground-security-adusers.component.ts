import { Component } from '@angular/core';

import { CoreHttpService } from 'app/infrastructure/core-services/http';

@Component({
  selector: 'app-playground-security-adusers',
  templateUrl: './playground-security-adusers.component.html',
  styleUrls: ['./playground-security-adusers.component.scss']
})
export class PlaygroundSecurityAdusersComponent {

  public constructor(
    private coreHttpService: CoreHttpService) { }

  public async testClicked(): Promise<void> {
    const relativeUrl = 'AdUsers';
    await this.coreHttpService.getAsync(relativeUrl);
  }
}
