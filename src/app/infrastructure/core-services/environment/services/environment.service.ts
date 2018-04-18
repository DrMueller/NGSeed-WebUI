import { Injectable } from '@angular/core';

import { environment } from 'app/../environments/environment';
import { AdalConfig } from '../models';

@Injectable()
export class EnvironmentService {
  public get isProduction(): boolean {
    return environment.production;
  }

  public get microserviceBaseUrl(): string {
    return environment.microserviceBaseUrl;
  }

  public get securityServiceBaseUrl(): string {
    return environment.securityServiceBaseUrl;
  }

  public get adalConfig(): AdalConfig {
    const config = <AdalConfig>environment.adalConfig;
    return config;
  }
}
