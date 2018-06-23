import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BusyIndicatorModule } from 'app/infrastructure/directives/busy-indicator';

import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
    BusyIndicatorModule
  ],
  exports: [
    components.BusyIndicatorButtonComponent
  ],
  declarations: [
    components.BusyIndicatorButtonComponent
  ]
})
export class BusyIndicatorButtonModule { }
