/// <reference path="../../../../../../node_modules/reflect-metadata/Reflect.d.ts" />.

import { Injectable } from '@angular/core';

import { ObjectUtils } from 'app/infrastructure/utils';
import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';

import { CTOR_PROP_KEY_PREFIX } from '../decorators';

@Injectable()
export class ObjectFactoryService {
  public create<T>(source: any, ctorFn: IParameterlessConstructor<T>): T {
    const result = new ctorFn();
    this.mapDefinedProperties(source, result);

    return result;
  }

  public createArray<T>(sourceCollection: any[], ctorFn: IParameterlessConstructor<T>): T[] {
    const result = new Array<T>();
    sourceCollection.forEach(sourceItem => {
      const mappedItem = new ctorFn();
      this.mapDefinedProperties(sourceItem, mappedItem);
      result.push(mappedItem);
    });

    return result;
  }

  private mapDefinedProperties<T>(source: Object, target: T): void {
    const sourceProperties = Object.getOwnPropertyNames(source);

    sourceProperties.forEach(sourcePropKey => {
      const targetProp = this.getSourceProperty(source, target, sourcePropKey);
      target[sourcePropKey] = targetProp;
    });
  }

  private getSourceProperty<T>(source: any, target: T, sourcePropertyKey: string): any {
    const sourcePropertyValue = source[sourcePropertyKey];
    const ctor = <IParameterlessConstructor<any>>Reflect.getMetadata(CTOR_PROP_KEY_PREFIX, target, sourcePropertyKey);

    if (ObjectUtils.isNullOrUndefined(ctor)) {
      return sourcePropertyValue;
    }

    if (sourcePropertyValue instanceof Array) {
      const result = new Array();
      const sourceArray = <Array<any>>sourcePropertyValue;

      sourceArray.forEach(sourceElement => {
        const targetObj = new ctor();
        this.mapDefinedProperties(sourceElement, targetObj);
        result.push(targetObj);
      });

      return result;
    } else {
      const targetObj = new ctor();
      this.mapDefinedProperties(sourcePropertyValue, targetObj);
      return targetObj;
    }
  }
}
