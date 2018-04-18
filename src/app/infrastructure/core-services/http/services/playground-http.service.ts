import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { EnvironmentService } from '../../environment';
import { ObjectFactoryService } from '../../object-creation';

import { ApiEndpoint } from '../enums';
import { HttpBaseService } from './abstractions';

@Injectable()
export class PlaygroundHttpService extends HttpBaseService {
  public get apiEndpoint() {
    return ApiEndpoint.TestMicroservice;
  }

  constructor(httpClient: HttpClient, objectFactoryService: ObjectFactoryService, environmentService: EnvironmentService) {
    super(httpClient, objectFactoryService, environmentService.microserviceBaseUrl);
  }
}
