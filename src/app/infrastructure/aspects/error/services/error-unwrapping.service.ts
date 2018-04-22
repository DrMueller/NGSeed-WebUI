import { Injectable } from '@angular/core';

@Injectable()
export class ErrorUnwrappingService {
  public unwrapError(error: any): Error {
    if (error.hasOwnProperty('rejection')) {
      error = error.rejection;
    }

    if (error.hasOwnProperty('status') && error.status === 0) {
      return new Error('Server not reachable');
    }

    if (typeof error.json === 'function') {
      error = error.json();
    }

    while (error.hasOwnProperty('error') && !!error.error) {
      error = error.error;
    }

    return error;
  }
}
