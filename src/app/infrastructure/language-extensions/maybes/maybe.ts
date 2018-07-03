import { Action, GenericAction } from 'app/infrastructure/types/callbacks';
import { ObjectUtils } from 'app/infrastructure/utils/object.utils';

import { None, Some } from './implementation';

export class Maybe {

  public static CreateNone<T>(): IMaybe<T> {
    return new None<T>();
  }

  public static CreateSome<T>(value: T): IMaybe<T> {
    return new Some<T>(value);
  }

  public static createFromValue<T>(value: T): IMaybe<T> {
    if (ObjectUtils.isNullOrUndefined(value)) {
      return new None<T>();
    }

    return new Some<T>(value);
  }
}

export interface IMaybe<T> {
  isSome: boolean;
  evaluate(whenSome?: GenericAction<T>, whenNone?: Action): void;
}
