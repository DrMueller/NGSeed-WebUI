import { ISubscribableEvent } from './subscribable-event.interface';
import { GenericAction } from '../../types/callbacks';

export class SimpleEvent<TEventArgs> implements ISubscribableEvent<TEventArgs> {
  private readonly _callbacks = new Array<GenericAction<TEventArgs>>();

  public subscribe(callback: GenericAction<TEventArgs>): void {
    if (this._callbacks.indexOf(callback) === -1) {
      this._callbacks.push(callback);
    }
  }

  public unsubscribe(callback: GenericAction<TEventArgs>): void {
    const itemIndex = this._callbacks.indexOf(callback);
    if (itemIndex > -1) {
      this._callbacks.splice(itemIndex, 1);
    }
  }

  public onEvent(args: TEventArgs): void {
    this._callbacks.forEach(cb => cb(args));
  }
}
