import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorDirective } from './busy-indicator.directive';
import { BusyIndicatorComponent } from './component/busy-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BusyIndicatorDirective
  ],
  entryComponents: [
    BusyIndicatorComponent
  ],
  declarations: [
    BusyIndicatorDirective,
    BusyIndicatorComponent
  ]
})
export class BusyIndicatorModule { }
