import {
  ComponentFactoryResolver, ComponentRef, Directive, Injector, Input,
  ViewContainerRef
} from '@angular/core';

import { BusyIndicatorComponent } from './component/busy-indicator.component';

@Directive({
  selector: '[appBusyIndicator]'
})
export class BusyIndicatorDirective {
  private componentRef: ComponentRef<BusyIndicatorComponent>;

  public constructor(
    vcRef: ViewContainerRef,
    componentFactoryResolver: ComponentFactoryResolver,
    injector: Injector) {
    const loadingFactory = componentFactoryResolver.resolveComponentFactory(BusyIndicatorComponent);
    this.componentRef = vcRef.createComponent(loadingFactory, 0, injector);
  }

  @Input() public set isBusyIndicatorShown(data: boolean) {
    this.componentRef.instance.showIndicator = data;
  }
}
