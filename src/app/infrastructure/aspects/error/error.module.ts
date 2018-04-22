import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { DialogModule, InputTextareaModule } from 'primeng/primeng';

import { NgProvideUtils } from 'app/infrastructure/utils';

import * as comp from './components';
import * as serv from './services';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    InputTextareaModule,
    FormsModule
  ],
  exports: [
    comp.ErrorDisplayComponent
  ],
  declarations: [
    comp.ErrorDisplayComponent
  ]
})
export class ErrorModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorModule,
      providers: [
        serv.ErrorRegistrationService,
        serv.ErrorInformationFactoryService,
        serv.ErrorUnwrappingService,
        serv.IgnoredErrorsService,
        NgProvideUtils.provideClass(ErrorHandler, serv.ErrorHandlingService),
      ]
    };
  }
}
