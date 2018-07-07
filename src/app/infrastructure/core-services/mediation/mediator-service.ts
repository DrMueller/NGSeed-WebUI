import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable()
export class MediatorService<T> {
  private subject = new Subject<T>();

  public publish(data: T): void {
    this.subject.next(data);
  }

  public subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    return this.subject.subscribe(next, error, complete);
  }
}
