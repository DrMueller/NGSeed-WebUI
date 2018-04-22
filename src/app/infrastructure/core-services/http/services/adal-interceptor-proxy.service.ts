import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdalInterceptor } from 'adal-angular4';
import { Observable } from 'rxjs/Observable';

import { EnvironmentService } from 'app/infrastructure/core-services/environment';

@Injectable()
export class AdalInterceptorProxyService implements HttpInterceptor {
  public constructor(private adalInterceptor: AdalInterceptor, private environmentService: EnvironmentService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.environmentService.activateSecurity) {
      return this.adalInterceptor.intercept(req, next);
    }

    return next.handle(req);
  }
}
