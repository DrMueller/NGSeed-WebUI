import { Injectable, ErrorHandler } from '@angular/core';

import { ErrorUnwrappingService } from './error-unwrapping.service';
import { IgnoredErrorsService } from './ignored-errors.service';
import { ErrorInformationFactoryService } from './error-information-factory.service';
import { ErrorRegistrationService } from './error-registration.service';

@Injectable()
export class ErrorHandlingService implements ErrorHandler {

  public constructor(
    private errorUnwrappingService: ErrorUnwrappingService,
    private ignoredErrorsService: IgnoredErrorsService,
    private errorInformationFactory: ErrorInformationFactoryService,
    private errorRegistrationService: ErrorRegistrationService) {
  }

  public handleError(error: any): void {
    const unpackedError = this.errorUnwrappingService.unwrapError(error);
    console.log(unpackedError);

    if (this.ignoredErrorsService.isIgnoredError(unpackedError)) {
      return;
    }

    const errorInformation = this.errorInformationFactory.createFromError(unpackedError);
    this.errorRegistrationService.registeredErrorCallbacks.forEach(cb => {
      cb(errorInformation);
    });
  }
}
