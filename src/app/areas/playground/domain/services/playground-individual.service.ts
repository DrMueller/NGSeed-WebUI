import { Injectable } from '@angular/core';

import { CoreHttpService } from 'app/infrastructure/core-services/http';

import { Individual } from '../models';

@Injectable()
export class PlaygroundIndividualService {
  constructor(private coreHttpService: CoreHttpService) { }

  public postIndividualAsync(individual: Individual): Promise<Individual> {
    const relativeUrl = 'Individuals';
    return this.coreHttpService.postAsync(relativeUrl, individual, Individual);
  }

  public getIndividualsAsync(): Promise<Individual[]> {
    const relativeUrl = 'Individuals';
    return this.coreHttpService.getArrayAsync(relativeUrl, Individual);
  }
}
