import { Injectable } from '@angular/core';

import { PlaygroundHttpService } from 'app/infrastructure/core-services/http';

import { Individual } from '../models';

@Injectable()
export class PlaygroundIndividualService {
  constructor(private playgroundHttpservice: PlaygroundHttpService) { }

  public postIndividualAsync(individual: Individual): Promise<Individual> {
    const relativeUrl = 'Individuals';
    return this.playgroundHttpservice.postAsync(relativeUrl, individual, Individual);
  }

  public getIndividualsAsync(): Promise<Individual[]> {
    const relativeUrl = 'Individuals';
    return this.playgroundHttpservice.getArrayAsync(relativeUrl, Individual);
  }
}
