import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentService } from '../../environment';
import { ObjectFactoryService } from '../../object-creation';

import { HttpBaseService } from './http-base.service';

@Injectable()
export class CoreHttpService extends HttpBaseService {
  constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService, environmentService: EnvironmentService) {
    super(httpClient, objectFactoryService, environmentService.coreServiceBaseUrl);
  }
}
