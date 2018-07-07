import { ArrayChangeType } from './array-change-type.enum';

export type ArrayChangedCallback<T> = (target: T[], p: PropertyKey, value: T, changeType: ArrayChangeType) => void;
