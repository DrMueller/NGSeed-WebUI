import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';

import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';

@Injectable()
export class MediatorBuilderService<T> {
  private builderSubject = new Subject<T>();

  public startBuilding(ctor: IParameterlessConstructor<T>): T {
    const result = new ctor();
    this.builderSubject.next(result);

    return result;
  }

  public subsribeBuildStep(nextBuildstep: (data: T) => void): Subscription {
    return this.builderSubject.subscribe(nextBuildstep);
  }
}
