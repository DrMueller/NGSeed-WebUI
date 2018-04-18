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
    const targetProperties = Object.getOwnPropertyNames(target);

    targetProperties.forEach(targetPropKey => {
      if (source.hasOwnProperty(targetPropKey)) {
        const sourceProp = this.getSourceProperty(target, source, targetPropKey);
        target[targetPropKey] = sourceProp;
      }
    });
  }

  private getSourceProperty<T>(target: T, source: any, targetPropKey: string): any {
    const sourceProp = source[targetPropKey];
    const ctor = <IParameterlessConstructor<any>>Reflect.getMetadata(CTOR_PROP_KEY_PREFIX, target, targetPropKey);

    if (ObjectUtils.isNullOrUndefined(ctor)) {
      return sourceProp;
    }

    if (sourceProp instanceof Array) {
      const result = new Array();
      const sourceArray = <Array<any>>sourceProp;

      sourceArray.forEach(sourceElement => {
        const targetObj = new ctor();
        this.mapDefinedProperties(sourceElement, targetObj);
        result.push(targetObj);
      });

      return result;
    } else {
      const targetObj = new ctor();
      this.mapDefinedProperties(sourceProp, targetObj);
      return targetObj;
    }
  }

}
