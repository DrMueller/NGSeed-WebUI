import { Injectable } from '@angular/core';

import { ApplicationInformation } from '../models';

@Injectable()
export class AppInfoService {
  public async getAppInfoAsync(): Promise<ApplicationInformation> {
    var appInfo = new ApplicationInformation();
    appInfo.applicationTitle = 'Ng-SEED';
    appInfo.applicationVersion = '1.2.3.4';
    return Promise.resolve(appInfo);
  }
}
