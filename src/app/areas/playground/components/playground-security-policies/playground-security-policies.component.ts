import { Component } from '@angular/core';

import { CoreHttpService } from 'app/infrastructure/core-services/http';

@Component({
  selector: 'app-playground-security-policies',
  templateUrl: './playground-security-policies.component.html',
  styleUrls: ['./playground-security-policies.component.scss']
})
export class PlaygroundSecurityPoliciesComponent {

  public givenNamePolicyResult: string | null = null;
  public nameMathiasMuellerResult: string |null = null;
  public neverFullFilledResult: string |null = null;

  constructor(private coreHttpService: CoreHttpService) { }

  public async givenNamePolicyClicked(): Promise<void> {
    const relativeUrl = 'TestSecurity/TestGivenName';
    this.givenNamePolicyResult = JSON.stringify(await this.coreHttpService.getAsync(relativeUrl));
  }

  public async nameMatthiasMuellerPolicyClicked(): Promise<void> {
    const relativeUrl = 'TestSecurity/TestNameMatthiasMueller';
    this.nameMathiasMuellerResult = JSON.stringify(await this.coreHttpService.getAsync(relativeUrl));
  }

  public async neverFullFilledPolicyClicked(): Promise<void> {
    const relativeUrl = 'TestSecurity/TestNeverFullFilled';
    this.neverFullFilledResult = JSON.stringify(await this.coreHttpService.getAsync(relativeUrl));
  }
}
